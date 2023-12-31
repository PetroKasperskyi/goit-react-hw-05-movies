import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { NavList, Container, LoadingText } from './Layout.styled';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #020250;
  text-decoration: none;
  font-size: 24px;

  &.active {
    color: #c816e0;
    font-weight: 500;
  }
`;

const Layout = () => {
  return (
    <Container>
      <header>
        <NavList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </NavList>
        <hr />
      </header>
      <main>
        <Suspense fallback={<LoadingText>Loading...</LoadingText>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;