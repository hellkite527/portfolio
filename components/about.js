import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BioCard from './bio';
import BackstoryCard from './backstory';
import SkillCard from './skills';

import { personalData } from '../data/data'

class About extends React.Component {
  render() {
    const dateOfBirth = personalData.dateOfBirth
    const skills = personalData.skills

    return (
      <>
        <Row id="About">
          <Col className="about">
            <Container>
              <Row>
                <Col xs={12} className="text-center mb-3 mb-md-5">
                  <h2 className='mb-0'>Character Profile</h2>
                </Col>

                <BioCard dateOfBirth={dateOfBirth} />
                
                <BackstoryCard />

                <SkillCard skills={skills} />

              </Row>
            </Container>
          </Col>
        </Row>
      </>
    )
  }
}

export default About;
