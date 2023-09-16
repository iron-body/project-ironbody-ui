import styled from '@emotion/styled';
import { Field } from 'formik';

export const FilterContainer = styled.div`
  display: flex;
`;

export const FormGroup = styled.div`
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

export const Container = styled.div`
  max-width: 1248px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 72px;
  padding-left: 96px;
  padding-right: 96px;
  padding-bottom: 81px;
`;

export const HeaderProducts = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchField = styled(Field)`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  width: 208px;
  font-size: 16px;
  line-height: 1.5;
  color: #efede8;
  background: inherit;

  padding: 14px;
`;

export const CategoriesField = styled(Field)`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  width: 164px;
  height: 52px;
  font-size: 16px;
  line-height: 1.5;
  color: #efede8;
  background: inherit;

  padding: 14px;
`;

export const RecommendedField = styled(Field)`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  height: 52px;
  width: 176px;
  font-size: 16px;
  line-height: 1.5;
  color: #efede8;
  background: inherit;
  padding: 14px;
`;

export const OptionFilter = styled.option`
  height: 24px;
  color: #efede8;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;



export const customStyles = {
  control: provided => ({
    ...provided,
    borderRadius: '12px',
    border: '1px solid rgba(239, 237, 232, 0.3)',
    background: 'inherit',
    color: '#333',
    width: '164px',
    height: `52px`,
    alignContent: `center`,

    padding: '14px',
    cursor: 'pointer',

    //  color: `#EFEDE8`,
    fontFamily: `Roboto`,
    fontSize: `16px`,
    lineHeight: 1.5,
  }),

  menu: provided => ({
    ...provided,
    borderRadius: `12px`,
    background: `#1C1C1C`,
    padding: `14px`,
  }),
  menuList: provided => ({
    ...provided,
    height: `276px`,
    paddingBottom: `14px`,

    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#EFEDE81A',
      borderRadius: '4px',
    },
  }),

  dropdownIndicator: provided => ({
    ...provided,
    color: '#333',
  }),

  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  option: provided => ({
    ...provided,
    color: `#EFEDE8`,
    fontFamily: `Roboto`,
    fontSize: `16px`,
    lineHeight: 1.5,
    background: 'inherit',
    border: 'none',
  }),
};
