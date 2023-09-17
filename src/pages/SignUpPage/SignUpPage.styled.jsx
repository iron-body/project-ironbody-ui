// import styled from 'styled-components';
import styled from '@emotion/styled';
import { device } from '../../Constants';

export const LineIcon = styled.img`
  position: absolute;
  top: 169px;
  left: 10px;
  width: 100px;
  height: 37px;
  @media ${device.tablet} {
    position: absolute;
    top: 272px;
    left: 15px;
    width: 187px;
    height: 69px;
  }
  @media ${device.desktop} {
    position: absolute;
    top: 283px;
    left: 79px;
    width: 187px;
    height: 69px;
  }
`;
export const TransformingYourBody = styled.div`
  position: absolute;
  top: 127px;
  left: 20px;
  font-size: var(--headline-style-mobile-h1-size);
  letter-spacing: 0.01em;
  line-height: 40px;
  font-weight: 500;
  display: inline-block;
  width: 335px;
  @media ${device.tablet} {
    position: absolute;
    top: 189px;
    left: 32px;
    letter-spacing: 0.01em;
    line-height: 78px;
    font-weight: 500;
    display: inline-block;
    width: 598px;
  }
  @media ${device.desktop} {
    position: absolute;
    top: 200px;
    left: 96px;
    font-size: var(--headline-style-h1-size);
    letter-spacing: 0.01em;
    line-height: 78px;
    font-weight: 500;
    display: inline-block;
    width: 598px;
  }
`;
export const Btns = styled.div`
  padding: 0px 20px 0px 20px;
  @media ${device.mobile} {
    position: absolute;
    top: 507px;
    ${'' /* left: 20px; */}
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
  }
  @media ${device.tablet} {
    padding: 0;
    position: absolute;
    top: 657px;
    left: 42px;
    display: flex;
    ${'' /* flex-direction: row; */}
    align-items: flex-start;
    justify-content: flex-start;
    ${'' /* gap: var(--gap-xl); */}
    gap: 12px;
    font-size: var(--font-size-xl);
  }
  @media ${device.desktop} {
    position: absolute;
    top: 600px;
    left: 96px;
    display: flex;
    ${'' /* flex-direction: row; */}
    align-items: center;
    ${'' /* justify-content: center; */}
    ${'' /* gap: var(--gap-xl); */}
     gap: 12px;
    font-size: var(--font-size-xl);
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
