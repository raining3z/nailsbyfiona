import { styled } from '@pigment-css/react';

const PageWrapper = styled.div(({ theme }) => ({
  padding: theme.spacing.lg,
  backgroundColor: theme.colors.backgroundSecondary,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.lg,

  [`@media ${theme.media.mobile}`]: {
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
}));

const Section = styled.section(({ theme }) => ({
  backgroundColor: theme.colors.backgroundPrimary,
  padding: theme.spacing.lg,
  borderRadius: theme.borderRadius.lg,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',

  [`@media ${theme.media.mobile}`]: {
    padding: theme.spacing.md,
  },
}));

const Heading = styled.h1(({ theme }) => ({
  ...theme.typography.h2,
  color: theme.colors.heading,
  marginBottom: theme.spacing.md,

  [`@media ${theme.media.mobile}`]: {
    fontSize: theme.fontSizes.lg,
    textAlign: 'center',
  },
}));

const SubHeading = styled.h2(({ theme }) => ({
  ...theme.typography.h3,
  color: theme.colors.primary,
  margin: `${theme.spacing.md} 0 ${theme.spacing.sm}`,
}));

const Paragraph = styled.p(({ theme }) => ({
  ...theme.typography.p,
  fontSize: theme.fontSizes.md,
  lineHeight: 1.6,
  color: theme.colors.mutedText,

  [`@media ${theme.media.mobile}`]: {
    fontSize: theme.fontSizes.smd,
  },
}));

const ImageWrapper = styled.div(({ theme }) => ({
  height: '100px',
  width: '100%',
  overflow: 'hidden',
  borderRadius: theme.borderRadius.md,
  marginBottom: theme.spacing.md,

  [`@media ${theme.media.mobile}`]: {
    marginBottom: theme.spacing.sm,
  },
}));

const Image = styled.img(({ theme }) => ({
  width: '100%',
  maxWidth: '100%',
  borderRadius: theme.borderRadius.md,
  marginBottom: theme.spacing.md,

  [`@media ${theme.media.mobile}`]: {
    marginBottom: theme.spacing.sm,
  },
}));

const GalleryGrid = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing.md,
  marginTop: theme.spacing.md,

  [`@media ${theme.media.mobile}`]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing.sm,
  },
}));

export default function About() {
  return (
    <PageWrapper>
      <Section>
        <Heading>About Hillsdale Farm West</Heading>
        <ImageWrapper>
          <Image
            src="https://cdn.midjourney.com/341841f8-ed7d-4960-9b30-83d3a4e540c4/0_2.png"
            alt="Neighborhood"
          />
        </ImageWrapper>
        <Paragraph>
          Welcome to Hillsdale Farm West, a peaceful and tight-knit community
          established in the early 2000s. Nestled among rolling hills and
          tree-lined streets, our neighborhood offers a charming blend of modern
          amenities and natural beauty.
        </Paragraph>
      </Section>

      <Section>
        <SubHeading>Our Mission</SubHeading>
        <ImageWrapper>
          <Image
            src="https://cdn.midjourney.com/48f495e6-8520-47b7-b730-631a20d3f254/0_1.png"
            alt="Community Playground"
          />
        </ImageWrapper>
        <Paragraph>
          At Hillsdale Farm West, we believe in fostering a safe, welcoming, and
          inclusive environment for all residents. Whether you're raising a
          family, retiring, or starting fresh — you're home here.
        </Paragraph>
      </Section>

      <Section>
        <SubHeading>Community Highlights</SubHeading>
        <ImageWrapper>
          <Image
            src="https://cdn.midjourney.com/2aa11755-3d3c-4d49-a12c-e2ced02053c6/0_3.png"
            alt="HOA Board Members"
          />
        </ImageWrapper>
        <Paragraph>
          Residents enjoy access to private walking trails, a central park and
          playground, annual neighborhood events, and a community garden managed
          by volunteers. We're proud of our friendly atmosphere and beautiful
          scenery.
        </Paragraph>
      </Section>

      <Section>
        <SubHeading>Meet the HOA</SubHeading>
        <ImageWrapper>
          <Image
            src="https://cdn.midjourney.com/2aa11755-3d3c-4d49-a12c-e2ced02053c6/0_1.png"
            alt="HOA Board Members"
          />
        </ImageWrapper>
        <Paragraph>
          Our Homeowners Association is made up of dedicated residents who work
          to ensure Hillsdale Farm West remains a safe and beautiful place to
          live. Monthly meetings are open to all — come join us!
        </Paragraph>
      </Section>

      <Section>
        <SubHeading>Photo Gallery</SubHeading>
        <GalleryGrid>
          <Image
            src="https://cdn.midjourney.com/7de39c44-312f-454e-9a2d-5dec83880ec9/0_0.png"
            alt="Gallery 5"
          />
          <Image
            src="https://cdn.midjourney.com/7de39c44-312f-454e-9a2d-5dec83880ec9/0_1.png"
            alt="Gallery 6"
          />
          <Image
            src="https://cdn.midjourney.com/7de39c44-312f-454e-9a2d-5dec83880ec9/0_3.png"
            alt="Gallery 1"
          />
          <Image
            src="https://cdn.midjourney.com/50cb3d02-8814-4ec2-b12b-4b1fc72dc956/0_3.png"
            alt="Gallery 2"
          />
          <Image
            src="https://cdn.midjourney.com/50cb3d02-8814-4ec2-b12b-4b1fc72dc956/0_0.png"
            alt="Gallery 3"
          />
          <Image
            src="https://cdn.midjourney.com/50cb3d02-8814-4ec2-b12b-4b1fc72dc956/0_1.png"
            alt="Gallery 4"
          />
          <Image
            src="https://cdn.midjourney.com/7de39c44-312f-454e-9a2d-5dec83880ec9/0_0.png"
            alt="Gallery 5"
          />
          <Image
            src="https://cdn.midjourney.com/7de39c44-312f-454e-9a2d-5dec83880ec9/0_1.png"
            alt="Gallery 6"
          />
        </GalleryGrid>
      </Section>
    </PageWrapper>
  );
}
