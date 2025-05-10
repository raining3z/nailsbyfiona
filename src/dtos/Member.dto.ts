export interface MemberDto {
  id: number;
  name: string;
  bio: string;
}

export const members: MemberDto[] = [
  {
    id: 1,
    name: 'Dad',
    bio: 'The head of the family, loves to cook and fix things around the house.',
  },
  {
    id: 2,
    name: 'Fiona',
    bio: 'The creative one, loves to paint and design.',
  },
  {
    id: 3,
    name: 'Annabelle',
    bio: 'The youngest, loves to play and explore.',
  },
  {
    id: 4,
    name: 'Grandma',
    bio: 'The wise one, loves to tell stories and share wisdom.',
  },
  {
    id: 5,
    name: 'Grandpa',
    bio: 'The funny one, loves to make everyone laugh.',
  },
];
