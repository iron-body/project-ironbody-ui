import styled from '@emotion/styled';
import { device } from '../../Constants';
export const Block = styled.div`
  position: absolute;
  top: 560px;
  left: 121px;
  width: 146px;
  height: 66px;
  @media ${device.tablet} {
    position: absolute;
    top: 714px;
    left: 331px;
    width: 206px;
    height: 96px;
    font-size: var(--font-size-5xl);
  }
  @media ${device.desktop} {
    position: absolute;
    top: 384px;
    left: 770px;
    width: 206px;
    height: 96px;
    font-size: var(--font-size-5xl);
  }
`;
export const BlockChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-12px);
  background-color: var(--color-darkslategray);
  width: 146px;
  height: 66px;
  @media ${device.tablet} {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-12px);
    background-color: var(--color-darkslategray);
    width: 206px;
    height: 96px;
  }
  @media ${device.desktop} {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-12px);
    background-color: var(--color-darkslategray);
    width: 206px;
    height: 96px;
  }
`;
export const QuantityTutorial = styled.b`
  position: absolute;
  top: 14px;
  left: 56px;
  line-height: 18px;
  @media ${device.tablet} {
    position: absolute;
    top: 20px;
    left: 75px;
    line-height: 24px;
  }
  @media ${device.desktop} {
    position: absolute;
    top: 20px;
    left: 75px;
    line-height: 24px;
  }
`;
export const VideoTutorial = styled.div`
  position: absolute;
  top: 36px;
  left: 56px;
  font-size: var(--font-size-xs);
  line-height: 16px;
  color: var(--color-whitesmoke-100);
  @media ${device.tablet} {
    position: absolute;
    top: 52px;
    left: 75px;
    font-size: var(--font-size-base);
    line-height: 24px;
    color: var(--color-whitesmoke-100);
  }
  @media ${device.desktop} {
    position: absolute;
    top: 52px;
    left: 75px;
    font-size: var(--font-size-base);
    line-height: 24px;
    color: var(--color-whitesmoke-100);
  }
`;
export const BlockItem = styled.div`
  position: absolute;
  top: 18px;
  left: 18px;
  border-radius: 50%;
  background-color: var(--color-lightsalmon);
  width: 30px;
  height: 30px;
  @media ${device.tablet} {
    position: absolute;
    top: 28px;
    left: 23px;
    border-radius: 50%;
    background-color: var(--color-lightsalmon);
    width: 40px;
    height: 40px;
  }
  @media ${device.desktop} {
    position: absolute;
    top: 28px;
    left: 23px;
    border-radius: 50%;
    background-color: var(--color-lightsalmon);
    width: 40px;
    height: 40px;
  }
`;
export const BlockInner = styled.img`
  position: absolute;
  height: 15.75%;
  width: 6.16%;
  top: 42.13%;
  right: 73.29%;
  bottom: 42.13%;
  left: 20.55%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  @media ${device.tablet} {
    position: absolute;
    height: 18.04%;
    width: 7.28%;
    top: 40.98%;
    right: 74.27%;
    bottom: 40.98%;
    left: 18.45%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  @media ${device.desktop} {
    position: absolute;
    height: 18.04%;
    width: 7.28%;
    top: 40.98%;
    right: 74.27%;
    bottom: 40.98%;
    left: 18.45%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
`;
