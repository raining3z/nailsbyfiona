import Button from '@/components/Button';
import { styled } from '@pigment-css/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTools } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { IoDocumentsOutline } from 'react-icons/io5';
import { LuMapPin } from 'react-icons/lu';
import { MdOutlinePets } from 'react-icons/md';

const Date = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Month = styled.span(({ theme }) => ({
  fontSize: theme.fontSizes.sm,
  textTransform: 'uppercase',
}));

const Day = styled.span(({ theme }) => ({
  fontSize: theme.fontSizes.md,
}));

const Main = styled.main(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const Hero = styled.section(({ theme }) => ({
  padding: theme.spacing.xl,
  background:
    'url(https://as2.ftcdn.net/v2/jpg/03/06/41/85/1000_F_306418516_DhAEfaKPg6EIeCqx0zCy6QQa4Kuzzw93.jpg) no-repeat center center',
  backgroundSize: 'cover',
  height: '360px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  [`@media ${theme.media.mobile}`]: {
    padding: theme.spacing.lg,
    height: 'auto',
    textAlign: 'center',
  },
}));

const HeroTitle = styled.h1(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.colors.white,
  textAlign: 'center',
  width: '400px',

  [`@media ${theme.media.mobile}`]: {
    fontSize: theme.fontSizes.lg,
    width: '100%',
  },
}));

const HeroCopy = styled.h2(({ theme }) => ({
  ...theme.typography.h2,
  color: theme.colors.white,
  textAlign: 'center',
  padding: `${theme.spacing.lg} 0`,

  [`@media ${theme.media.mobile}`]: {
    fontSize: theme.fontSizes.md,
  },
}));

const HeroButtons = styled.div(({ theme }) => ({
  marginTop: theme.spacing.md,
  display: 'flex',
  gap: theme.spacing.md,
  justifyContent: 'center',

  [`@media ${theme.media.mobile}`]: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}));

const AnnouncementsEvents = styled.section(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing.xxl,
  gap: '60px',

  [`@media ${theme.media.mobile}`]: {
    flexDirection: 'column',
    gap: theme.spacing.xxl,
    padding: theme.spacing.lg,
  },
}));

const Column = styled.div(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.lg,

  [`@media ${theme.media.mobile}`]: {
    gap: theme.spacing.md,
  },
}));

const ColumnTitle = styled.h3(({ theme }) => ({
  ...theme.typography.h3,
  marginBottom: theme.spacing.sm,
}));

const Announcement = styled(Link)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing.md,
  alignItems: 'center',
}));

const Event = styled(Link)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing.md,
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: theme.borderRadius.lg,
  overflow: 'hidden',
  position: 'relative',
  transition: '0.2s ease-in-out',

  '&:hover': {
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },

  [`${Date}`]: {
    width: '70px',
    background: '#415c49',
    height: '70px',
    color: '#fff',
  },

  [`${Month}`]: {
    fontSize: '16px',
  },

  [`${Day}`]: {
    fontSize: '24px',
  },
}));

const Description = styled.p(({ theme }) => ({
  ...theme.typography.p,
  fontSize: theme.fontSizes.smd,
  borderBottom: '2px solid #ccc',
  paddingBottom: '16px',
  width: '100%',
}));

const Information = styled.p(({ theme }) => ({
  ...theme.typography.p,
  fontSize: theme.fontSizes.smd,
  fontWeight: 'bold',
}));

const ArrowIcon = styled(IoIosArrowForward)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing.md,
  top: '50%',
  transform: 'translateY(-50%)',
}));

const QuickLinks = styled.section(({ theme }) => ({
  padding: `0 ${theme.spacing.xxl}`,

  [`@media ${theme.media.mobile}`]: {
    padding: `0 ${theme.spacing.md}`,
  },
}));

const CardGrid = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing.md,
  marginTop: '1rem',

  [`@media ${theme.media.mobile}`]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

const Card = styled(Link)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  textAlign: 'center',
  backgroundColor: '#fff',
  borderRadius: theme.borderRadius.lg,
  padding: theme.spacing.lg,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  transition: '0.2s ease-in-out',

  '&:hover': {
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
  },
}));

const CardText = styled.p(({ theme }) => ({
  ...theme.typography.p,
  fontSize: theme.fontSizes.smd,
  marginTop: theme.spacing.sm,
}));

const TestimonialNewsletter = styled.section(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing.lg,
  padding: theme.spacing.xxl,
  backgroundColor: '#fff',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
  marginTop: theme.spacing.xxl,

  [`@media ${theme.media.mobile}`]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing.xl,
    textAlign: 'center',
    padding: theme.spacing.md,
  },
}));

const Testimonial = styled.blockquote(({ theme }) => ({
  fontSize: theme.fontSizes.md,
  fontStyle: 'italic',
  lineHeight: '1.5',
  marginTop: theme.spacing.sm,
  maxWidth: '500px',

  [`@media ${theme.media.mobile}`]: {
    maxWidth: '100%',
    fontSize: theme.fontSizes.smd,
  },
}));

const TestimonialIcon = styled.div(({ theme }) => ({
  width: '100px',
  height: '100px',
  borderRadius: theme.borderRadius.full,
  overflow: 'hidden',
  backgroundColor: 'red',
}));

const NewsletterSignup = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.sm,

  input: {
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.sm,
    fontSize: theme.fontSizes.smd,
    width: '100%',
  },

  [`@media ${theme.media.mobile}`]: {
    width: '100%',
    gap: theme.spacing.md,
  },
}));

export default function Home() {
  return (
    <Main>
      <Hero>
        <HeroTitle>Welcome to Hillsdale Farm West</HeroTitle>
        <HeroCopy>A place to call home</HeroCopy>
        <HeroButtons>
          <Button variant="secondary">See What’s New</Button>
          <Button>Join the Resident</Button>
        </HeroButtons>
      </Hero>

      <AnnouncementsEvents>
        <Column>
          <ColumnTitle>Announcements</ColumnTitle>
          <Announcement href="#">
            <Date>
              <Month>April</Month>
              <Day>20</Day>
            </Date>
            <Description>Spring Garage Sale This Saturday</Description>
          </Announcement>
          <Announcement href="#">
            <Date>
              <Month>April</Month>
              <Day>12</Day>
            </Date>
            <Description>Update on Community Park Construction</Description>
          </Announcement>
          <Announcement href="#">
            <Date>
              <Month>April</Month>
              <Day>3</Day>
            </Date>
            <Description>Traffic Safety Reminder</Description>
          </Announcement>
        </Column>
        <Column>
          <ColumnTitle>Upcoming Events</ColumnTitle>
          <Event href="#">
            <Date>
              <Month>May</Month>
              <Day>5</Day>
            </Date>
            <Information>Movie Night in Park</Information>
            <ArrowIcon />
          </Event>
          <Event href="#">
            <Date>
              <Month>May</Month>
              <Day>10</Day>
            </Date>
            <Information>Community Potluck</Information>
            <ArrowIcon />
          </Event>
          <Link href="/events">Full Event Calendar</Link>
        </Column>
      </AnnouncementsEvents>

      <QuickLinks>
        <h2>Quick Links</h2>
        <CardGrid>
          <Card href="#">
            <LuMapPin size={50} />
            <CardText>Neighborhood Map</CardText>
          </Card>
          <Card href="#">
            <IoDocumentsOutline size={50} />
            <CardText>HOA Documents</CardText>
          </Card>
          <Card href="#">
            <MdOutlinePets size={50} />
            <CardText>Pet Directory</CardText>
          </Card>
          <Card href="#">
            <FaTools size={50} />
            <CardText>Recommended Services</CardText>
          </Card>
        </CardGrid>
      </QuickLinks>

      <TestimonialNewsletter>
        <TestimonialIcon>
          <Image
            src="https://cdn.midjourney.com/a85643c6-fb15-49e5-8016-3f3d5905dc54/0_3.png"
            alt="Testimonial"
            width={100}
            height={100}
            // Add any additional styles here
          />
        </TestimonialIcon>
        <Testimonial>
          <p>
            “Hillsdale Farm West has such a warm and welcoming community. We
            love living here!”
          </p>
          <b>- Sarah W.</b>
        </Testimonial>
        <NewsletterSignup>
          <h3>Newsletter Signup</h3>
          <input type="email" placeholder="Email address" />
          <Button>Subscribe</Button>
        </NewsletterSignup>
      </TestimonialNewsletter>
    </Main>
  );
}
