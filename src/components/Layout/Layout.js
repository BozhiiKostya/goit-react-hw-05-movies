import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { GlobalStyle } from 'GlobalStyle';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <Container>
      <header className="header">
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/movies">
          Movies
        </NavLink>
      </header>
      <main className="main">
        <Suspense fallback={'./Loading'}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </Container>
  );
};

export default Layout;
