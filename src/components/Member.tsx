import Link from 'next/link';
import Card from './Card';
import { MemberDto } from '@/dtos/Member.dto';
import Image from 'next/image';
import { styled } from '@pigment-css/react';

const Name = styled(Link)`
  font-size: 20px;
  font-weight: bold;

  margin-bottom: 10px;
`;

const Bio = styled.p`
  font-size: 16px;
  color: #555;
`;

interface MemberProps {
  member: MemberDto;
}

export default function Member({ member }: MemberProps) {
  return (
    <Card>
      <Link href={`/about/${member.id}`}>
        <Image
          src={`https://cdn.midjourney.com/934c77bc-f873-4d60-aa79-d1e4eeaf6e58/0_${member.id}.png`}
          alt={member.name}
          width={150}
          height={150}
        />
      </Link>
      <Name href={`/about/${member.id}`}>{member.name}</Name>
      <Bio>{member.bio}</Bio>
    </Card>
  );
}
