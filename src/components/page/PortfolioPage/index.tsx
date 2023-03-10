import {Container} from 'react-bootstrap';

import {navigation} from 'constants/navigation';
import {HeadTag} from 'components/molecules';
import {Banner, NavBar} from 'components/organisms';
import {About, Footer, Projects, WorkExperience} from 'components/templates';

export const PortfolioPage = () => {
  return (
    <div id='Home'>
      <NavBar navigation={navigation} />
      <Container fluid>
        <HeadTag />
        <Banner />
        <About />
        <WorkExperience />
        <Projects />
        <Footer />
      </Container>
    </div>
  )
};
