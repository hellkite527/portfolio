import React from 'react';

import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import BioCard from './bio';
import BackstoryCard from './backstory';
import SkillCard from './skills';

import { personalData } from '../data/data'

class About extends React.Component {
  render() {
    const dateOfBirth = personalData.dateOfBirth
    const skills = personalData.skills

    const getAge = (dateString) => {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age
    }

    return (
      <>
        <Row>
          <Col style={{ minHeight: '100vh' }} className="d-flex align-items-center font-monospace">
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
