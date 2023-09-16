import { PropTypes } from 'prop-types';
import StyledTitlePage from './TitlePage.styled';

const TitlePage = ({ titleText }) => {
  return <StyledTitlePage>{titleText}</StyledTitlePage>;
};

TitlePage.propTypes = {
  titleText: PropTypes.string,
};

export default TitlePage;
