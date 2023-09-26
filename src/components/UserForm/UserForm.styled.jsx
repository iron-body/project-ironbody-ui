import { Field, Form } from 'formik';
import styled from 'styled-components';
// import { device } from '../../Constants';


export const Label = styled.label`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 1.3;
`;

export const FieldBasicStyled = styled(Field)`
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
  @media screen and (min-width: 704px) {
    font-size: 16px;
    line-height: 1.5;
    width: 345px;
    height: 52px;
  }
`;


export const FieldBigStyled = styled(Field)`
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.5;
  box-sizing: border-box;
  margin-top: 4px;
  width: 161px;
  background: rgba(151, 151, 151, 0);
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  height: 46px;
  color: var(--white);
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
  @media screen and (min-width: 704px) {
    width: 100%;
    height: 52px;
    margin-top: 8px;
  }
`;


export const FieldSmallStyled = styled(Field)`
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.5;
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
  @media screen and (min-width: 704px) {
    width: 100%;
    height: 52px;
    margin-top: 8px;
  }
`;

export const BasicWrapper = styled.div`
  margin-top: 4px;
  @media screen and (min-width: 704px) {
    display: flex;
    margin-top: 8px;
  }
`;
export const NameWrapper = styled.div`
  @media screen and (min-width: 704px) {
    padding-right: 14px;
  }
`;

export const ParamsWrapper = styled.div`
  padding-right: 14px;
  @media screen and (min-width: 704px) {
   display: flex;
   flex-direction: column;
  }
`;

export const CurrentWeightWrapper = styled.div`
  @media screen and (min-width: 704px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  @media screen and (min-width: 704px) {
    display: flex;
    align-items: center;
   
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  padding-bottom: 14px;
  @media screen and (min-width: 704px) {
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
  @media screen and (min-width: 704px) {
    margin-top: 0;
  }
`;


export const FormStyled = styled(Form)`
  padding-bottom: 66px;
  @media screen and (min-width: 704px) {
    padding-bottom: 54px;
  }
  @media screen and (min-width: 1248px) {
    padding-bottom: 44px;
    width: 700px;
    padding-right: 64px;
    border-right: 1px rgba(239, 237, 232, 0.2) solid;
  }
`;