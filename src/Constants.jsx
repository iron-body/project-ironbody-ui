const size = {
  phone: '320px',
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
};

export const device = {
  phone: `(min-width: ${size.phone})`,
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
