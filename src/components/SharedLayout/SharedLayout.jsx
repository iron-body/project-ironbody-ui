import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Container } from '../CommonStyled/Common.styled';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Header />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
