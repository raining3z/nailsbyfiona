'use client';
import { styled } from '@pigment-css/react';
import Image from 'next/image';

const Page = styled.div(({ theme }) => ({
  background: theme.colors.secondary,
  padding: theme.spacing.lg,
  minHeight: '100vh',
}));

const Title = styled.h1(({ theme }) => ({
  fontSize: theme.fontSizes.xl,
  textAlign: 'center',
  color: theme.colors.primary,
  marginBottom: theme.spacing.lg,
}));

const Grid = styled.div(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing.lg,
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: '1fr',
  },
}));

const Card = styled.div(({ theme }) => ({
  background: theme.colors.backgroundPrimary,
  padding: theme.spacing.md,
  borderRadius: '12px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
}));

const NailTitle = styled.h2(({ theme }) => ({
  fontSize: theme.fontSizes.lg,
}));

const Description = styled.p(({ theme }) => ({
  fontSize: theme.fontSizes.sm,
}));

const IntroSection = styled.section(({ theme }) => ({
  marginBottom: theme.spacing.xl,
  textAlign: 'center',
  maxWidth: '700px',
  marginInline: 'auto',
}));

const IntroHeading = styled.h1(({ theme }) => ({
  fontSize: theme.fontSizes.xl,
  color: theme.colors.primary,
  marginBottom: theme.spacing.md,
}));

const IntroText = styled.p(({ theme }) => ({
  fontSize: theme.fontSizes.smd,
  color: theme.colors.mutedText,
  marginBottom: theme.spacing.sm,
}));

export default function NailMenu() {
  const nails = [
    {
      title: 'Classic',
      image:
        'https://cdn.midjourney.com/52f72281-d73c-465b-84e0-71365e77dfad/0_0.png',
      description: 'Simple and chic with glossy nude polish.',
      cost: '$30',
      aftercare: 'Moisturize hands regularly.',
    },
    {
      title: 'French',
      image:
        'https://cdn.midjourney.com/52f72281-d73c-465b-84e0-71365e77dfad/0_1.png',
      description: 'Pink base with white tips for timeless style.',
      cost: '$40',
      aftercare: 'Wear gloves when cleaning.',
    },
    {
      title: 'Gel Art',
      image:
        'https://cdn.midjourney.com/52f72281-d73c-465b-84e0-71365e77dfad/0_2.png',
      description: 'Bold and creative gel-painted designs.',
      cost: '$60+',
      aftercare: 'Use cuticle oil daily.',
    },
    {
      title: 'Nail Art',
      image:
        'https://cdn.midjourney.com/52f72281-d73c-465b-84e0-71365e77dfad/0_3.png',
      description: 'Custom hand-painted nail designs.',
      cost: '$50+',
      aftercare: 'Avoid harsh chemicals.',
    },
  ];

  return (
    <Page>
      <IntroSection>
        <IntroHeading>Welcome to Nails By Fiona 💅</IntroHeading>
        <IntroText>
          I'm Fiona — a creative nail artist who loves turning fingertips into
          works of art! Whether you're looking for something simple, elegant, or
          totally bold, I’m here to help you express your style.
        </IntroText>
        <IntroText>
          Check out my nail selections below and let me know which look you love
          most!
        </IntroText>
      </IntroSection>
      <Title>Nail Selections</Title>
      <Grid>
        {nails.map((nail) => (
          <Card key={nail.title}>
            <Image
              src={nail.image}
              alt={nail.title}
              width={300}
              height={200}
              style={{ borderRadius: '8px' }}
            />
            <NailTitle>{nail.title}</NailTitle>
            <Description>{nail.description}</Description>
            <Description>
              <strong>Cost:</strong> {nail.cost}
            </Description>
            <Description>
              <strong>Aftercare:</strong> {nail.aftercare}
            </Description>
          </Card>
        ))}
      </Grid>
    </Page>
  );
}
