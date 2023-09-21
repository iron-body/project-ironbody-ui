import styled from '@emotion/styled';
import { Field } from 'formik';
import { device } from '../../Constants';

export const FilterContainer = styled.div`
  display: block;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const FormGroup = styled.div`
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

export const MobInpCont = styled.div`
  display: flex;
  margin-bottom: 40px;

  @media ${device.tablet} {
    display: flex;
    mardin-bottom: 0;
  }
`;

export const SearchField = styled(Field)`
  font-size: 14px;
  line-height: 1.28;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  width: 305px;
  color: #efede8;
  background: inherit;
  padding: 14px;
  margin-bottom: 16px;

  &::placeholder {
    color: #efede8;
  }

  @media ${device.tablet} {
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    width: 208px;
    font-size: 16px;
    line-height: 1.5;
    color: #efede8;
    background: inherit;
    margin-bottom: 0;

    padding: 14px;

    &::placeholder {
      color: #efede8;
    }
  }

  @media ${device.desktop} {
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    width: 208px;
    font-size: 16px;
    line-height: 1.5;
    color: #efede8;
    background: inherit;

    padding: 14px;

    &::placeholder {
      color: #efede8;
    }
  }
`;

export const SearchFieldContainer = styled.div`
  position: relative;
`;

export const SearchInputButton = styled.button`
  position: absolute;
  border: none;
  background: inherit;
  top: 15px;
  right: 0;
  padding: 0;

  @media ${device.tablet} {
    position: absolute;
    border: none;
    background: inherit;
    top: 17px;
    right: 16px;
    padding: 0;
  }

  @media ${device.desktop} {
    position: absolute;
    border: none;
    background: inherit;
    top: 17px;
    right: 16px;
    padding: 0;
  }
`;

export const EraseInputButton = styled.button`
  width: 18px;
  height: 18px;
  display: block;
  position: absolute;
  border: none;
  background: inherit;
  top: 15px;
  right: 26px;
  padding: 0;

  @media ${device.tablet} {
    top: 17px;
    right: 40px;
  }

  @media ${device.desktop} {
    top: 17px;
    right: 40px;
  }
`;

export const SearchIconButton = styled.img`
  width: 18px;
  height: 18px;
`;

export const FormTitle = styled.p`
  display: none;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.desktop} {
    display: block;
    color: rgba(239, 237, 232, 0.5);
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.28;
    margin-bottom: 8px;
    text-align: end;
  }
`;

export const categoriesStyles = {
  control: provided => ({
    ...provided,
    borderRadius: '12px',
    border: '1px solid rgba(239, 237, 232, 0.3)',
    background: 'inherit',
    width: '146px',
    height: `46px`,
    alignContent: `center`,

    padding: '14px',
    cursor: 'pointer',

    color: `#EFEDE8`,
    fontFamily: `Roboto`,
    fontSize: `16px`,
    lineHeight: 1.5,
    placeholder: `#EFEDE8`,

    '&:hover': {
      border: `1px solid rgba(239, 237, 232, 0.3)`,
    },

    '&:focus': {
      border: `1px solid rgba(239, 237, 232, 0.3)`,
    },

    '@media only screen and (min-width: 768px)': {
      ...provided['@media only screen and (min-width: 768px)'],
      width: '192px',
      height: '52px',
    },

    '@media only screen and (min-width: 1440px)': {
      ...provided['@media only screen and (min-width: 1440px)'],
      width: '192px',
      height: '52px',
    },
  }),

  placeholder: provided => ({
    ...provided,
    color: 'EFEDE8',
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
    color: '#EFEDE8',
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

export const recomendedStyles = {
  control: provided => ({
    ...provided,
    borderRadius: '12px',
    border: '1px solid rgba(239, 237, 232, 0.3)',
    background: 'inherit',
    color: '#EFEDE8',
    width: '173px',
    height: `46px`,
    alignContent: `center`,

    padding: '14px',
    cursor: 'pointer',

    //  color: `#EFEDE8`,
    fontFamily: `Roboto`,
    fontSize: `16px`,
    lineHeight: 1.5,
    '&:hover': {
      border: `1px solid rgba(239, 237, 232, 0.3)`,
    },

    '&:focus': {
      border: `1px solid rgba(239, 237, 232, 0.3)`,
    },

    '&:active': {
      border: `1px solid rgba(239, 237, 232, 0.3)`,
    },

    '@media only screen and (min-width: 768px)': {
      ...provided['@media only screen and (min-width: 768px)'],
      width: '204px',
      height: '52px',
    },

    '@media only screen and (min-width: 1440px)': {
      ...provided['@media only screen and (min-width: 1440px)'],
      width: '204px',
      height: '52px',
    },
  }),

  placeholder: provided => ({
    ...provided,
    color: 'EFEDE8',
  }),

  menu: provided => ({
    ...provided,
    borderRadius: `12px`,
    background: `#1C1C1C`,
    // padding: `14px`,
  }),
  menuList: provided => ({
    ...provided,
    height: `auto`,
    // paddingBottom: `14px`,

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
    color: '#EFEDE8',
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
