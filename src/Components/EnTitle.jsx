import styled from 'styled-components';

export default function EnTitle({ title, tag, size, color }) {
  return (
    <Title as={tag} size={size} color={color}>
      {title}
    </Title>
  );
}

const Title = styled.h2`
  font-family: 'Koulen', cursive;
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
`;
