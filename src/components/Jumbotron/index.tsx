import { ReactNode } from 'react';
import { IJumbotron } from 'interfaces';
import { Container, Inner, Item, Title, SubTitle, Pane, Image } from './jumbotron';

interface Props {
  children?: ReactNode;
  direction: string;
  item: IJumbotron;
}

export default function Jumbotron({ direction = 'row', item }: Props) {
  // return <Inner direction={direction}>{children}</Inner>;
  return (
    <Item>
      <Inner direction={direction}>
        <Jumbotron.Pane>
          <Jumbotron.Title>{item.title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
        </Jumbotron.Pane>
        <Jumbotron.Pane>
          {/* <Jumbotron.Image src={item.image} alt={item.alt} width={300} height={150} layout='responsive' /> */}
          <Jumbotron.Image src={item.image} alt={item.alt} />
        </Jumbotron.Pane>
      </Inner>
    </Item>
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
