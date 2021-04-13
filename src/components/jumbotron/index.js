import { Container, Inner, Item, Title, SubTitle, Pane, Image } from './style';

export default function Jumbotron({ item }) {
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

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
