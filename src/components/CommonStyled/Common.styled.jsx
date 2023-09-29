import styled from '@emotion/styled';
import { device } from '../../Constants';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
`;

export const Root = styled.div`
  width: 100vw;
  /* outline: 1px solid rgba(239, 237, 232, 0.3); */
  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  background-position: left 100% top 100%;
  background-image: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    image-set(
      url('/project-ironbody-ui/side-view-people-training-gym-mobile@1x.jpg') 1x,
      url('/project-ironbody-ui/side-view-people-training-gym-mobile@2x.jpg') 2x
    );

  @media ${device.mobile} {
    position: relative;
    width: var(--width-mobile);
    height: 812px;
    overflow: hidden;
    background-position: left 100% top 100%;

    color: var(--white);
    font-family: var(--headline-style-mobile-h1);

    background-image: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      image-set(
        url('/project-ironbody-ui/side-view-people-training-gym-mobile@1x.jpg') 1x,
        url('/project-ironbody-ui/side-view-people-training-gym-mobile@2x.jpg') 2x
      );

    background-repeat: no-repeat;
  }
  @media ${device.tablet} {
    max-width: var(--width-tablet);
    width: var(--width-tablet);
    height: 1024px;
    overflow: hidden;
    color: var(--white);
    font-family: var(--headline-style-mobile-h1);
    background-image: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      image-set(
        url('/project-ironbody-ui/side-view-people-training-gym-tablet@1x.jpg') 1x,
        url('/project-ironbody-ui/side-view-people-training-gym-tablet@2x.jpg') 2x
      );
    background-repeat: no-repeat;
    background-position: left 100% top 100%;
  }
  @media ${device.desktop} {
    max-width: var(--width-desktop);
    width: var(--width-desktop);
    height: 800px;
    overflow: hidden;
    color: var(--white);
    font-family: var(--headline-style-mobile-h1);
    background-image: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
      image-set(
        url('/project-ironbody-ui/side-view-people-training-gym-desktop@1x.jpg') 1x,
        url('/project-ironbody-ui/side-view-people-training-gym-desktop@2x.jpg') 2x
      );

    background-repeat: no-repeat;
    background-position: left 100% top 100%;
  }
`;

export const NoOutlineRoot = styled.div`
  :1;
  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  @media ${device.mobile} {
    position: relative;
    width: var(--width-mobile);

    overflow: hidden;
    background-position: left 100% top 100%;
    color: var(--white);
    font-family: var(--headline-style-mobile-h1);
  }
  @media ${device.tablet} {
    max-width: var(--width-tablet);
    width: var(--width-tablet);

    overflow: hidden;
    color: var(--white);
    font-family: var(--headline-style-mobile-h1);
    background-position: left 100% top 100%;
  }
  @media ${device.desktop} {
    max-width: var(--width-desktop);
    width: var(--width-desktop);

    overflow: hidden;
    color: var(--white);
    font-family: var(--headline-style-mobile-h1);
    background-position: left 100% top 100%;
  }
`;
