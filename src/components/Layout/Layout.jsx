import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { Suspense } from 'react';

const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 15px;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;
const Header = styled.header`
  height: 40px;
`;

const Layout = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
