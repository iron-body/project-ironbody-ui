import { Field, Form } from 'formik';
import styled from 'styled-components';
import { device } from '../../Constants';
// import { device } from '../../Constants';

export const Label = styled.label`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 1.3;
`;

export const FieldBasicStyled = styled.input`
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.5;
  box-sizing: border-box;
  margin-bottom: 14px;
  width: 100%;
  background: rgba(151, 151, 151, 0);
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  height: 46px;
  color: var(--white);
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.5;
    width: 341px;
    height: 52px;
  }
`;

export const FieldBigStyled = styled.input`
  color: #efede8;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  box-sizing: border-box;
  margin-top: 4px;
  width: 156px;
  background: rgba(151, 151, 151, 0);
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  height: 46px;
  color: var(--white);
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
  @media ${device.tablet} {
    width: 159px;
    height: 52px;
    margin-top: 8px;

    font-size: 16px;
    line-height: 1.5;
  }
`;

export const FieldSmallStyled = styled.input`
  color: #efede8;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  font-family: Roboto;

  box-sizing: border-box;
  margin-top: 4px;
  width: 160px;
  background: rgba(151, 151, 151, 0);
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  height: 46px;
  color: var(--white);
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.5;
    width: 100%;
    height: 52px;
    margin-top: 8px;
  }
`;

export const FieldBigStyledDate = styled.div`
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.5;
  box-sizing: border-box;
  margin-top: 4px;
  width: 156px;
  background: rgba(151, 151, 151, 0);
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  height: 46px;
  color: var(--white);
  align-items: center;
  /* padding-left: 14px;
  padding-right: 14px; */
  /* padding: 12px; */
  @media ${device.tablet} {
    width: 187px;
    height: 52px;
    margin-top: 8px;
  }
`;

export const BasicWrapper = styled.div`
  margin-top: 4px;
  @media ${device.tablet} {
    display: flex;
    margin-top: 8px;
  }
`;
export const NameWrapper = styled.div`
  @media ${device.tablet} {
    padding-right: 14px;
  }
`;

export const ParamsWrapper = styled.div`
  padding-right: 14px;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    width: 168px;
  }
`;
export const ParamsWrapperDesiredWeight = styled.div`
  padding-right: 14px;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    width: 140px;
  }
`;

export const CurrentWeightWrapper = styled.div`
  width: 100%;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  padding-bottom: 14px;
  @media ${device.tablet} {
    padding-right: 14px;
    padding-bottom: 16px;
  }
`;

export const InfoContainerTwo = styled.div`
  margin-bottom: 20px;
`;

export const ParamsWrapperTwo = styled.div`
  margin-top: 4px;
  display: flex;
  @media ${device.tablet} {
    margin-top: 0;
  }
`;

export const FormStyled = styled.form`
  padding-bottom: 66px;
  @media ${device.tablet} {
    padding-bottom: 54px;
  }
  @media ${device.desktop} {
    padding-bottom: 44px;
    padding-right: 64px;
    border-right: 1px rgba(239, 237, 232, 0.2) solid;
    width: 696px;
  }
`;
