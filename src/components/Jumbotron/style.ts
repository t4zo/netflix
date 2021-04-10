import styled from 'styled-components';
import NextImage from 'next/image';

interface StyledProps {
  direction?: string;
}

export const Inner = styled.div<StyledProps>`
  max-width: 1000px;
  margin: auto;

  display: flex;
  flex-direction: column;
  /* flex-direction: ${({ direction }) => direction}; */
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: ${({theme}: any) => theme.color.primary};
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 35px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (min-width: 600px) {
    font-size: 50px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: normal;
  line-height: normal;

  @media (min-width: 600px) {
    font-size: 26px;
  }
`;

export const Pane = styled.div`
  width: 100%;
  padding: 0 45px;
  text-align: center;

  @media (min-width: 1000px) {
    width: 50%;
    padding: 0;
    text-align: left;
  }
`;

export const Image = styled(NextImage)`
  /* max-width: 100%;
  height: auto; */
`;

export const Container = styled.div`
  &:nth-child(even) ${Inner} {
    flex-direction: column;
  }

  ${Item}:last-of-type h2 {
    margin-bottom: 50px;
  }

  @media (min-width: 1000px) {
    &:nth-child(even) ${Inner} {
      flex-direction: row-reverse;
    }

    ${Item}:last-of-type h2 {
      margin-bottom: 0;
    }
  }
`;
