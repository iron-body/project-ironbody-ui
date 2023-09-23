import * as React from 'react';
import PropTypes from 'prop-types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  MemoryRouter,
  Link,
  Routes,
  Route,
  matchPath,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { StyledLink } from './ExercisesCategories.styled';
import { red } from '@mui/material/colors';

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return (
      <StaticRouter location="/exercises/Body parts">{children}</StaticRouter>
    );
  }

  return (
    <MemoryRouter initialEntries={['/exercises/Body parts']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch([
    '/exercises/Body parts',
    '/exercises/Muscles',
    '/exercises/Equipment',
  ]);
  const currentTab = routeMatch?.path || '/exercises/Body parts';

  return (
    <Tabs value={currentTab}>
      <Tab
        key="Body parts"
        label="Body parts"
        value="/exercises/Body parts"
        to="/exercises/Body parts"
        sx={{ color: '#efede8' }}
        component={Link}
      >
        Body parts
      </Tab>
      <Tab
        key="Muscles"
        label="Muscles"
        value="/exercises/Muscles"
        to="/exercises/Muscles"
        component={Link}
        sx={{ color: '#efede8' }}
      >
        Muscles
      </Tab>
      <Tab
        key="Equipment"
        label="Equipment"
        value="/exercises/Equipment"
        to="/exercises/Equipment"
        component={Link}
        sx={{ color: '#efede8' }}
      >
        Equipment
      </Tab>
    </Tabs>
  );
}

function CurrentRoute() {
  const location = useLocation();

  return (
    <Typography variant="body8" sx={{ pb: 2 }} color="text.secondary">
      Current route: {location.pathname}
    </Typography>
  );
}

export const ExercisesCategories = () => {
  return (
    <Box sx={{ width: '100%', color: 'success.main' }}>
      <Routes>
        <Route path="*" element={<CurrentRoute />} />
      </Routes>
      <MyTabs />
    </Box>
  );
};

// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import { Link } from 'react-router-dom';

// import { Container, StyledLink} from './ExercisesCategories.styled';

// const ExercisesCategories = ({ activeTab, setActiveTab }) => {

//     return (
//     <Container>
//       <StyledLink to="/exercises/Body parts">Body parts</StyledLink>
//       <StyledLink to="/exercises/Muscles">Muscles</StyledLink>
//       <StyledLink to="/exercises/Equipment">Equipment</StyledLink>

//     </Container>
//   )
// };

// export default ExercisesCategories;

// function samePageLinkNavigation(event) {
//   if (
//     event.defaultPrevented ||
//     event.button !== 0 || // ignore everything but left-click
//     event.metaKey ||
//     event.ctrlKey ||
//     event.altKey ||
//     event.shiftKey
//   ) {
//     return false;
//   }
//   return true;
// }

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={event => {
//         // Routing libraries handle this, you can remove the onClick handle when using them.
//         if (samePageLinkNavigation(event)) {
//           event.preventDefault();
//         }
//       }}
//       {...props}
//     />
//   );
// }

// export const ExercisesCategories = () => {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     // event.type can be equal to focus with selectionFollowsFocus.
//     if (
//       event.type !== 'click' ||
//       (event.type === 'click' && samePageLinkNavigation(event))
//     ) {
//       setValue(newValue);
//     }
//   };

//   return (
//     <Container>
//             <Box sx={{ width: '80%' }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="secondary"
//           aria-label="nav tabs example"
//           selectionFollowsFocus
//           ScrollButtonComponent

//         >
//  <LinkTab  label="Body parts"to="/exercises/Body parts"/>
//  {/* <LinkTab to={{
//  path to:'/exercises/Body parts'}}>Body parts</LinkTab> */}

// <StyledLink to="/exercises/Muscles">Muscles</StyledLink>

// <StyledLink to="/exercises">Muscles</StyledLink>

// {/*
//           <StyledLink to="/exercises/Body parts">Body parts</StyledLink>

//           <StyledLink to="/exercises/Muscles">Muscles</StyledLink>

//           <StyledLink to="/exercises/Equipment">Muscles</StyledLink> */}
//         </Tabs>
//       </Box>
//     </Container>
//   );
// };
