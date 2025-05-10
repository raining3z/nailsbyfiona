// Card Implmentation option is towards the end of the file
import { styled } from '@pigment-css/react';

const PageWrapper = styled.div(({ theme }) => ({
  padding: theme.spacing.lg,
  backgroundColor: theme.colors.backgroundSecondary,
  color: theme.colors.text,

  [`@media ${theme.media.mobile}`]: {
    padding: theme.spacing.md,
  },
}));

const Heading = styled.h1(({ theme }) => ({
  ...theme.typography.h2, // note: update h1, h2 tags, so not using h1 tag with h2 typography
  color: theme.colors.heading,
  marginBottom: theme.spacing.lg,
}));

const Cards = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing.md,

  [`@media ${theme.media.mobile}`]: {
    gridTemplateColumns: '1fr',
  },
}));

const Card = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  backgroundColor: theme.colors.backgroundPrimary,
  borderRadius: theme.borderRadius.md,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
  overflow: 'hidden',
  padding: theme.spacing.md,
  gap: theme.spacing.md,

  [`@media ${theme.media.mobile}`]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

// const Thumbnail = styled.img(({ theme }) => ({
//   width: '120px',
//   height: '120px',
//   objectFit: 'cover',
//   borderRadius: theme.borderRadius.sm,
// }));

const ThumbnailPlaceholder = styled.div(({ theme }) => ({
  width: '120px',
  height: '120px',
  backgroundColor: theme.colors.backgroundSecondary,
  borderRadius: theme.borderRadius.md,
}));

const Info = styled.div(({ theme }) => ({
  flex: 1,

  [`@media ${theme.media.mobile}`]: {
    marginTop: theme.spacing.sm,
  },
}));

const Name = styled.h2(({ theme }) => ({
  ...theme.typography.h3,
  color: theme.colors.primary,
}));

const Text = styled.p(({ theme }) => ({
  ...theme.typography.p,
  fontSize: theme.fontSizes.sm,
  margin: `${theme.spacing.sm} 0`,
}));

export default function Directory() {
  const families = [
    {
      name: 'The Johnson Family',
      image: 'https://source.unsplash.com/400x300/?family,portrait',
      address: '123 Oak Drive',
      years: 8,
      members: ['John', 'Sarah', 'Ella', 'Max'],
      interests: 'Gardening, biking, book club',
      isHOA: true,
      notes: 'Sarah runs the community garden program.',
    },
    {
      name: 'The Ramirez Family',
      image: 'https://source.unsplash.com/400x300/?family,home',
      address: '456 Maple Lane',
      years: 3,
      members: ['Carlos', 'Lucia', 'Mateo'],
      interests: 'Soccer, grilling, hiking',
      isHOA: false,
      notes: 'Carlos coaches the local youth soccer team.',
    },
    {
      name: 'The Patel Family',
      image: 'https://source.unsplash.com/400x300/?neighbors,house',
      address: '789 Pine Circle',
      years: 10,
      members: ['Anika', 'Raj', 'Priya'],
      interests: 'Photography, volunteering, yoga',
      isHOA: true,
      notes: 'Raj is on the HOA board.',
    },
    {
      name: 'The Smith Family',
      image: 'https://source.unsplash.com/400x300/?family,home',
      address: '101 Birch Street',
      years: 5,
      members: ['Mike', 'Anna', 'Liam'],
      interests: 'Cooking, traveling, painting',
      isHOA: true,
      notes: 'Anna organizes the neighborhood potlucks.',
    },
    {
      name: 'The Lee Family',
      image: 'https://source.unsplash.com/400x300/?family,home',
      address: '202 Cedar Avenue',
      years: 2,
      members: ['David', 'Maya'],
      interests: 'Running, reading, gardening',
      isHOA: false,
      notes: 'Maya is a local artist.',
    },
  ];

  return (
    <PageWrapper>
      <Heading>Neighborhood Directory</Heading>
      <Cards>
        {families.map((family, index) => (
          <Card key={index}>
            {/* <Thumbnail src={family.image} alt={`${family.name} photo`} /> */}
            <ThumbnailPlaceholder />
            <Info>
              <Name>{family.name}</Name>
              <Text>
                <b>Address:</b> {family.address}
              </Text>
              <Text>
                <b>Years in Neighborhood:</b> {family.years}
              </Text>
              <Text>
                <b>Family Members:</b> {family.members.join(', ')}
              </Text>
              <Text>
                <b>Interests:</b> {family.interests}
              </Text>
              <Text>
                <b>HOA Member:</b> {family.isHOA ? 'Yes' : 'No'}
              </Text>
              <Text>
                <b>Notes:</b> {family.notes}
              </Text>
            </Info>
          </Card>
        ))}
      </Cards>
    </PageWrapper>
  );
}

// Card Implmentation
//
//
// import { styled } from '@pigment-css/react';

// const PageWrapper = styled.div(({ theme }) => ({
//   padding: theme.spacing.lg,
//   backgroundColor: theme.colors.backgroundSecondary,
//   display: 'flex',
//   flexDirection: 'column',
//   gap: theme.spacing.lg,
// }));

// const Heading = styled.h1(({ theme }) => ({
//   color: theme.colors.heading,
// }));

// const DirectoryGrid = styled.div(({ theme }) => ({
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//   gap: theme.spacing.lg,
// }));

// const Card = styled.div(({ theme }) => ({
//   backgroundColor: theme.colors.backgroundPrimary,
//   borderRadius: theme.borderRadius.md,
//   padding: theme.spacing.md,
//   boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
// }));

// const Image = styled.img(({ theme }) => ({
//   width: '100%',
//   height: '200px',
//   objectFit: 'cover',
//   borderRadius: theme.borderRadius.sm,
//   marginBottom: theme.spacing.sm,
// }));

// const Label = styled.div(({ theme }) => ({
//   fontWeight: 700,
//   marginTop: theme.spacing.sm,
//   color: theme.colors.primary,
// }));

// const Text = styled.p(({ theme }) => ({
//   fontSize: theme.fontSizes.smd,
//   color: theme.colors.text,
//   margin: '0.25rem 0',
// }));

// export default function Directory() {
//   const families = [
//     {
//       name: 'The Johnson Family',
//       image: 'https://source.unsplash.com/400x300/?family,portrait',
//       address: '123 Oak Drive',
//       years: 8,
//       members: ['John, Mary, Emma'],
//       interests: 'Gardening, biking, book club',
//       isHOA: true,
//       notes: 'Sarah runs the community garden program.',
//     },
//     {
//       name: 'The Ramirez Family',
//       image: 'https://source.unsplash.com/400x300/?family,home',
//       address: '456 Maple Lane',
//       years: 3,
//       members: ['Carlos, Sofia'],
//       interests: 'Soccer, grilling, hiking',
//       isHOA: false,
//       notes: 'Carlos coaches the local youth soccer team.',
//     },
//     {
//       name: 'The Patel Family',
//       image: 'https://source.unsplash.com/400x300/?neighbors,house',
//       address: '789 Pine Circle',
//       years: 10,
//       members: ['Raj, Priya, Asha'],
//       interests: 'Photography, volunteering, yoga',
//       isHOA: true,
//       notes: 'Raj is on the HOA board.',
//     },
//   ];

//   return (
//     <PageWrapper>
//       <Heading>Neighborhood Directory</Heading>
//       <DirectoryGrid>
//         {families.map((family, index) => (
//           <Card key={index}>
//             <Image src={family.image} alt={`${family.name} photo`} />
//             <Label>{family.name}</Label>
//             <Text>
//               <b>Address:</b> {family.address}
//             </Text>
//             <Text>
//               <b>Years in Neighborhood:</b> {family.years}
//             </Text>
//             <Text>
//               <b>Family Members:</b>{' '}
//               {family.members.map((member) => member).join(', ')}
//             </Text>
//             <Text>
//               <b>Interests:</b> {family.interests}
//             </Text>
//             {family.isHOA && (
//               <Text>
//                 <b>HOA Member</b>
//               </Text>
//             )}

//             <Text>
//               <b>Notes:</b> {family.notes}
//             </Text>
//           </Card>
//         ))}
//       </DirectoryGrid>
//     </PageWrapper>
//   );
// }
