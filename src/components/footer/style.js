import styled from 'styled-components';

export const Container = styled.div`
  padding: 70px 30px;
  max-width: 1000px;
  margin: auto;

  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    padding: 70px 56px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 15px;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.primaryLight};
  margin-bottom: 20px;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const Title = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.primaryLight};
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 0.9rem;
  color: color;
  margin-bottom: 40px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
