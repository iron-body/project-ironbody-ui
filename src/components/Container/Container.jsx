import PropTypes from 'prop-types';
import StyledContainer from './Сontainer.styled';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
