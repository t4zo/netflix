import { Container, Row, Column, Link, Title, Text, Break } from './style';

export default function Footer() {
  return (
    <Footer.Container>
      <Footer.Title>Questions? Contact Us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href='#'>FAQ</Footer.Link>
          <Footer.Link href='#'>Investor Relations</Footer.Link>
          <Footer.Link href='#'>Ways to Watch</Footer.Link>
          <Footer.Link href='#'>Corporate Information</Footer.Link>
          <Footer.Link href='#'>Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href='#'>Help Center</Footer.Link>
          <Footer.Link href='#'>Jobs</Footer.Link>
          <Footer.Link href='#'>Terms of Use</Footer.Link>
          <Footer.Link href='#'>Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href='#'>Account</Footer.Link>
          <Footer.Link href='#'>Redeem Gift Cards</Footer.Link>
          <Footer.Link href='#'>Privacy</Footer.Link>
          <Footer.Link href='#'>Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href='#'>Media Center</Footer.Link>
          <Footer.Link href='#'>Buy Gift Cards</Footer.Link>
          <Footer.Link href='#'>Cookie Preferences</Footer.Link>
          <Footer.Link href='#'>Legal Noticies</Footer.Link>
        </Footer.Column>
      </Footer.Row>
    </Footer.Container>
  );
}

Footer.Container = function FooterContainer({ children }: any) {
  return <Container>{children}</Container>;
};

Footer.Row = function FooterRow({ children, ...restProps }: any) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }: any) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }: any) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }: any) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }: any) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }: any) {
  return <Break {...restProps}>{children}</Break>;
};
