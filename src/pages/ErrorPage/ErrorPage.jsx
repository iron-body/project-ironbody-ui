import { useNavigate } from 'react-router-dom';
import { Section, Left, Content, Title404, Text404, Button } from './ErrorPage.styled';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Section>
      {/* <StyledLink to="/">
        <Svg>
          <use href={`/#icon-logo`} />
        </Svg>
      </StyledLink> */}
      <Left>
        <Content>
          <Title404>404</Title404>
          <Text404>
            Sorry, you have reached a page that we could not find. It seems that you are lost among
            the numbers and letters of our virtual space. Perhaps this page went on vacation or
            decided to disappear into another dimension. We apologize for this inconvenience.
          </Text404>
          <Button onClick={handleClick}>Go Home</Button>
        </Content>
      </Left>
    </Section>
  );
};

export default ErrorPage;
