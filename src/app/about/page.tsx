'use client';
import { styled } from '@pigment-css/react';
import Image from 'next/image';

const Container = styled.section(({ theme }) => ({
  background: theme.colors.backgroundSecondary,
  padding: theme.spacing.lg,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Heading = styled.h1(({ theme }) => ({
  fontSize: theme.fontSizes.xxl,
  color: theme.colors.primary,
  marginBottom: theme.spacing.md,
}));

const Bio = styled.p(({ theme }) => ({
  fontSize: theme.fontSizes.smd,
  maxWidth: '600px',
  margin: '0 auto',
  color: theme.colors.mutedText,
}));

const FactsSection = styled.div(({ theme }) => ({
  marginTop: theme.spacing.xl,
}));

const FactsHeading = styled.h2(({ theme }) => ({
  fontSize: theme.fontSizes.lg,
  color: theme.colors.heading,
  marginBottom: theme.spacing.sm,
}));

const FactList = styled.ul(() => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
}));

const FactItem = styled.li(({ theme }) => ({
  fontSize: theme.fontSizes.smd,
  color: theme.colors.text,
  marginBottom: theme.spacing.sm,
}));

export default function AboutFiona() {
  return (
    <Container>
      <Heading>About Fiona</Heading>
      <Image
        src="https://cdn.midjourney.com/a1ab4150-f278-40fb-8fe6-5e6676b7ebe3/0_2.png"
        alt="Fiona"
        width={150}
        height={150}
        style={{ borderRadius: '50%' }}
      />
      <Bio>
        Hi, I’m Fiona! I love doing nails and creating new styles that make
        people feel beautiful. Whether you want something classic or custom nail
        art, I can’t wait to make your hands shine!
      </Bio>

      <FactsSection>
        <FactsHeading>Fun Facts About Fiona</FactsHeading>
        <FactList>
          <FactItem>I love playing volleyball!</FactItem>
          <FactItem>My favorite player is Lexi Rodriguez.</FactItem>
          <FactItem>I enjoy being creative with nail designs.</FactItem>
        </FactList>
      </FactsSection>
    </Container>
  );
}
