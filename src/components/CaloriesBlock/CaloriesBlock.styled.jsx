import styled from '@emotion/styled';
import { device } from '../../Constants';
export const CaloriesBlockStyled = styled.div`
  position: absolute;
  top: 696px;
  left: 236px;
  width: 119px;
  height: 76px;
  font-size: var(--font-size-5xl);
  @media ${device.tablet} {
    position: absolute;
    top: 866px;
    left: 556px;
    width: 180px;
    height: 110px;
    font-size: var(--font-size-29xl);
  }
  @media ${device.desktop} {
    position: absolute;
    top: 519px;
    left: 1228px;
    width: 180px;
    height: 110px;
  }
`;
export const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-12px);
  background-color: var(--color-lightsalmon);
  width: 119px;
  height: 76px;
  @media ${device.tablet} {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-12px);
    background-color: var(--color-lightsalmon);
    width: 180px;
    height: 110px;
  }
  @media ${device.desktop} {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-12px);
    background-color: var(--color-lightsalmon);
    width: 180px;
    height: 110px;
  }
`;
export const QuantityCal = styled.b`
  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  position: relative;
  letter-spacing: -1px;
  line-height: 24px;
  text-transform: uppercase;
  @media ${device.tablet} {
    position: relative;
    letter-spacing: -1px;
    line-height: 50px;
    text-transform: uppercase;
  }
  @media ${device.desktop} {
    position: relative;
    letter-spacing: -1px;
    line-height: 50px;
    text-transform: uppercase;
  }
`;
export const Cal = styled.b`
  font-family: var(--headline-style-mobile-h1);
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 16px;
  color: var(--color-whitesmoke-100);
  @media ${device.tablet} {
    position: relative;
    font-size: var(--font-size-base);
    line-height: 24px;
    color: var(--color-whitesmoke-100);
  }
  @media ${device.desktop} {
    position: relative;
    font-size: var(--font-size-base);
    line-height: 24px;
    color: var(--color-whitesmoke-100);
  }
`;

export const Block2 = styled.div`
  position: absolute;
  top: 38px;
  left: 18px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: var(--gap-8px);
  @media ${device.tablet} {
    position: absolute;
    top: 46px;
    left: 28px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-11px);
  }
  @media ${device.desktop} {
    position: absolute;
    top: 46px;
    left: 28px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-11px);
  }
`;
export const EllipseDiv = styled.div`
  position: absolute;
  top: 14px;
  left: 18px;
  border-radius: 50%;
  background-color: var(--beige);
  width: 20px;
  height: 20px;
  @media ${device.tablet} {
    position: absolute;
    top: 14px;
    left: 28px;
    border-radius: 50%;
    background-color: var(--beige);
    width: 24px;
    height: 24px;
  }
  @media ${device.desktop} {
    position: absolute;
    top: 14px;
    left: 28px;
    border-radius: 50%;
    background-color: var(--beige);
    width: 24px;
    height: 24px;
  }
`;
export const RunningStickFigureSvgrepoCIcon = styled.img`
  position: absolute;
  top: 18px;
  left: 22px;
  width: 12px;
  height: 12px;
  overflow: hidden;
  @media ${device.tablet} {
    position: absolute;
    top: 18px;
    left: 32px;
    width: 16px;
    height: 16px;
    overflow: hidden;
  }
  @media ${device.desktop} {
    position: absolute;
    top: 18px;
    left: 32px;
    width: 16px;
    height: 16px;
    overflow: hidden;
  }
`;
