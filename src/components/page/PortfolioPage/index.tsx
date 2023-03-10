import {navigation} from 'constants/navigation';
import {Container} from 'components/atoms';
import {HeadTag} from 'components/molecules';
import {Banner, NavBar} from 'components/organisms';
import {
  AboutTemplate,
  FooterTemplate,
  ProjectsTemplate,
  WorkExperienceTemplate
} from 'components/templates';

export const PortfolioPage = () => {
  return (
    <div id='Home'>
      <NavBar navigation={navigation} />
      <Container fluid>
        <HeadTag />
        <Banner />
        <AboutTemplate />
        <WorkExperienceTemplate />
        <ProjectsTemplate />
        <FooterTemplate />
      </Container>
    </div>
  )
};
