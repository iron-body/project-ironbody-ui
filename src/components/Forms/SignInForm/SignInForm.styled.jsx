import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { device } from '../../../Constants';

export const SignInFormStyled = styled.div`
  position: absolute;
  top: 127px;
  left: 20px;
  margin: 0px 20px 0px 20px;
  @media ${device.mobile} {
    margin: 0;
    left: 20px;
    width: 335px;
  }

  @media ${device.tablet} {
    margin: 0;
    position: absolute;
    top: 189px;
    left: 32px;
    width: 496px;
  }

  @media ${device.desktop} {
    margin: 0;
    position: absolute;
    top: 189px;
    left: 96px;
    width: 496px;
  }
`;

export const SignInH1Styled = styled.h1`
  display: inline-block;
  margin-bottom: 14px;
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
  @media ${device.mobile} {
    display: inline-block;
    margin-bottom: 14px;
    color: #efede8;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 116.667% */
  }
  @media ${device.tablet} {
    position: absolute;
    ${'' /* margin-bottom: 16px; */}
  }
`;
export const SignInPStyled = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  margin-bottom: 28px;
  top: 60px;
  @media ${device.mobile} {
    margin: 0;
    color: rgba(239, 237, 232, 0.3);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    ${'' /* margin-bottom: 28px; */}
    top: 60px;
  }
  @media ${device.tablet} {
    position: absolute;
    ${'' /* margin-bottom: 32px; */}
    color: rgba(239, 237, 232, 0.30);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

export const FormSignInStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media ${device.mobile} {
    position: absolute;
    top: 106px;
  }
  @media ${device.tablet} {
    position: absolute;
    gap: 20px;
    top: 116px;
  }
`;

export const FieldSignInStyled = styled(Field)`
  display: flex;
  padding: 0;
  padding-left: 14px;
  padding-top: 9px;
  padding-bottom: 9px;
  height: 26px;
  align-items: center;
  background-color: inherit;
  border-radius: 12px;
  /* border: 1px solid rgba(239, 237, 232, 0.3); */

  border: ${props => {
    if (props.erroremail === undefined && props.touchedemail?.email === true) {
      return `1px solid #3CBF61`;
    }
    if (props.erroremail && props.touchedemail?.email === true) {
      return '1px solid #D80027';
    }
    if (props.errorpassword === undefined && props.touchedpassword?.password === true) {
      return '1px solid #3CBF61';
    }
    if (props.errorpassword && props.touchedpassword?.password === true) {
      return '1px solid #D80027';
    }
    return '1px solid rgba(239, 237, 232, 0.3)';
  }};

  color: var(--white);

  &:hover {
    border: 1px solid #e6533c;
  }

  @media ${device.mobile} {
    width: ${335 - 16}px;
    color: rgba(239, 237, 232, 0.6);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    padding-left: 14px;
    padding-top: 9px;
    padding-bottom: 9px;
  }
  @media ${device.tablet} {
    width: ${364 - 16}px;
    padding-left: 14px;
    padding-top: 20px;
    padding-bottom: 20px;
    height: 10px;
    color: rgba(239, 237, 232, 0.6);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

export const ValidateStatusPasswordBlockStyled = styled.div`
  position: absolute;

  display: flex;

  @media ${device.mobile} {
    top: 110px;
  }
  @media ${device.tablet} {
    top: 126px;
  }
`;

export const ValidateStatusEmailBlockStyled = styled.div`
  position: absolute;
  /* top: 55px; */
  display: flex;
  @media ${device.mobile} {
    top: 46px;
  }
  @media ${device.tablet} {
    top: 55px;
  }
`;
