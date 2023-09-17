// import { Container, Title } from './ErrorPage.styled';

// const ErrorPage = () => {
//   return (
//     <Container>
//       <Title>404</Title>
//     </Container>
//   );
// };

// export default ErrorPage;

import { useNavigate } from 'react-router-dom';
import { Left, Content, Title404, Text404, Button } from './ErrorPage.styled';
import { Section } from './Section';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Section>
      <Left>
        <Content>
          <Title404>404</Title404>
          <Text404>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </Text404>
          <Button type="button" onClick={handleClick}>
            Go Home
          </Button>
        </Content>
      </Left>
    </Section>
  );
};

export default ErrorPage;
