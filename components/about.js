import React from 'react';

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
            <div>
              <Row>
                <Col xs={12} className="text-center mb-3 mb-md-5">
                  <h2>Character Profile</h2>
                </Col>

                <BioCard dateOfBirth={dateOfBirth} />
                
                <BackstoryCard />

                <SkillCard skills={skills} />

              </Row>
            </div>
          </Col>
        </Row>
      </>
    )
  }
}

export default About;
