import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
const Layout = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
