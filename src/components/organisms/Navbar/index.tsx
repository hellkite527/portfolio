import {Navbar} from 'react-bootstrap';

import {Container, Nav, NavLink} from 'components/atoms';

type NavBarProps = {
  navigation: string[];
}

export const NavBar = ({navigation}: NavBarProps) => {
  return (
    <Navbar className='portfolio-nav'>
      <Container fluid>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {
              Array.isArray(navigation) && navigation.map((nav:string) => (
                <NavLink href={`#${nav}`} key={`nav-${nav}`}>
                  {nav}
                </NavLink>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
