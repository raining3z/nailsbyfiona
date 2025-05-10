import { styled } from '@pigment-css/react';

const FooterContainer = styled.footer(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  color: theme.colors.white,
  textAlign: 'center',
  padding: theme.spacing.md,
  fontSize: theme.fontSizes.sm,

  [`@media ${theme.media.mobile}`]: {
    fontSize: theme.fontSizes.xs,
  },
}));

const Highlight = styled.span(({ theme }) => ({
  color: theme.colors.highlight,
  fontWeight: 600,
}));

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      © {currentYear} <Highlight>Nails By Fiona</Highlight>. All rights
      reserved.
      <br />
      Made with 💅 by Fiona & family.
    </FooterContainer>
  );
}
