import React from 'react';

import Head from 'next/head'

import MainNavigation from '../components/navbar'
import Workexp from '../components/workexp'
import Projects from '../components/projects'
import Banner from '../components/banner'
import About from '../components/about'
import Footer from '../components/footer';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {
  workExps,
  projList,
  socialMedia,
  navigation
} from '../data/data'

class Home extends React.Component {
  render() {
    const {
      workExpProps,
      projListProps,
      socialProps,
      navigationProps
    } = this.props;

    const dividers = (id) => (
      <Row id={id}>
        <Col>
          <hr />
        </Col>
      </Row>
    );

    return (
      <div>
        <MainNavigation navigation={navigationProps} />
  
        <Container id="Home">
          <Head>
            <title>Vincent Pableo</title>
            <meta name="description" content="Online portfolio of Vincent Pableo" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
  
          <Banner socialMedia={socialProps} />

          { dividers('About') }
  
          <About />

          { dividers('Experiences') }

          <Workexp experiences={workExpProps} />

          { dividers('Projects') }

          <Projects projects={projListProps} />

          <Footer />

        </Container>
      </div>
    )
  }
}

export const getStaticProps = async () => {
  return {
    props: {
      workExpProps: workExps,
      projListProps: projList,
      socialProps: socialMedia,
      navigationProps: navigation,
    }
  }
}

export default Home;
