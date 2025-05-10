import { styled } from '@pigment-css/react';
import { ReactNode } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return <Container>{children}</Container>;
}
