import Head from 'next/head'
import Image from 'next/image'

import MainNavigation from '../components/navbar';
import Workexp from '../components/workexp';
import Projects from '../components/projects';
import Banner from '../components/banner';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from '../styles/Home.module.css'

import {workExps, projList, socialMedia} from '../data/data'

export default function Home({workExpProps, projListProps, socialProps}) {

  return (
    <div>
      <MainNavigation />

      <Container>
        <Head>
          <title>Vincent Pableo</title>
          <meta name="description" content="Online portfolio of Vincent Pableo" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Banner */}
        <Row id="Home">
          <Col style={{ height: '100vh' }} className="text-center d-flex justify-content-center align-items-center">
            <Row>
              <Col>
                <Banner social={socialProps} />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row id="About">
          <Col>
            <hr />
          </Col>
        </Row>

        {/* About */}
        <Row >
          <Col style={{ height: '100vh' }} className="text-center d-flex justify-content-center">
            <h2 className="text-center my-4">About Me</h2>
          </Col>
        </Row>

        <Row id="Experiences">
          <Col>
            <hr />
          </Col>
        </Row>

        {/* Work Experience */}
        <Row >
          <Col>
            <h2 className="text-center my-4">Work Experiences</h2>
            {
              workExpProps.map((exp, index) => <div key={`${index}-work`}><Workexp exp={exp} /></div> )
            }
          </Col>
        </Row>

        <Row id="Projects">
          <Col>
            <hr />
          </Col>
        </Row>
        
        {/* Projects */}
        <Row >
          <Col xs={12}>
            <h2 className="text-center my-4">Projects</h2>
          </Col>
          <Col>
            <Row>
              {
                projListProps.map((proj, index) => <Col xs={12} md={4} className="mb-4" key={`${index}-proj`}><Projects  proj={proj} /></Col> )
              }
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <footer className={styles.footer}>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by{' '}
                <span className={styles.logo}>
                  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
              </a>
            </footer>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      workExpProps: workExps,
      projListProps: projList,
      socialProps: socialMedia,
    }
  }
}