import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
      background-color: black;

    }
:root {

/* fonts */
--headline-style-mobile-h1: Roboto;

/* font sizes */
--font-size-xs: 12px;
--font-size-xm: 14px;
--font-size-5xl: 24px;
--font-size-base: 16px;
--headline-style-mobile-h1-size: 38px;
--font-size-29xl: 48px;
--font-size-xl: 20px;
--headline-style-h1-size: 70px;

/* Colors */
--black: #040404;
--beige: #efa082;
--white: #efede8;
--color-whitesmoke-200: rgba(239, 237, 232, 0.3);
--color-whitesmoke-100: rgba(239, 237, 232, 0.65);
--color-lightsalmon: #ef8964;
--color-darkslategray: #303030;
--orange: #e6533c;

/* Gaps */
--gap-8px: 8px;
--gap-11px: 11px;
--gap-xl: 20px;

/* Paddings */
--padding-xs: 12px;
--padding-21xl: 40px;
--padding-base: 16px;
--padding-41xl: 60px;

/* Border radiuses */
--br-1px: 1px;
--br-12px: 12px;

/*Media Breakpoints*/
--width-mobile: 375px;
--width-tablet: 768px;
--width-desktop: 1440px;

}
`;
