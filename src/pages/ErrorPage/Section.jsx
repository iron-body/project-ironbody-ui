import styled from 'styled-components';

export const Section = styled.div`
  position: relative;
  background-image: url(/public/sideviewpeopletraininggym-1@2x.png);
  background-image: -webkit-image-set(
    url(/public/sideviewpeopletraininggym-1@2x.png) 1x,
    url(/public/sideviewpeopletraininggym-1@2x.png) 2x
  );
  color: #efede8;
  background-repeat: no-repeat;
  background-position: bottom 0 right -40%;
  margin: 0 auto;
  position: relative;
  height: 100vh;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 768px;
    background-color: rgba(0, 0, 0, 1);

    background-image: url(/public/sideviewpeopletraininggym-1@2x.png);
    background-image: -webkit-image-set(
      url(/public/sideviewpeopletraininggym-1@2x.png) 1x,
      url(/public/sideviewpeopletraininggym-1@2x.png) 2x
    );
    background-position: bottom 0 right 0%;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 800px;

    background-image: url(/public/sideviewpeopletraininggym-12@2x.png) 771px;
    background-image: -webkit-image-set(
      url(/public/sideviewpeopletraininggym-12@2x.png) 1x,
      url(/public/sideviewpeopletraininggym-12@2x.png) 2x
    );
  }
`;
