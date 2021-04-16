// import { ReactNode } from 'react';
import { IJumbotron } from 'interfaces';
import { Container, Inner, Item, Title, SubTitle, Pane, Image } from './style';

interface Props {
  // children?: ReactNode;
  item: IJumbotron;
}

export default function Jumbotron({ item }: Props) {
  // return <Inner direction={direction} {...restProps}>{children}</Inner>;
  return (
    <Jumbotron.Container>
      <Item>
        <Inner>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Image src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} layout='intrinsic' />
        </Inner>
      </Item>
    </Jumbotron.Container>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }: any) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }: any) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }: any) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }: any) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }: any) {
  return <Image {...restProps} />;
};
