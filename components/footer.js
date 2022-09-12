import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Image from 'next/image'

export default function Footer({socialMedia}){
  const currentYear = new Date().getFullYear();

  return (
    <Row className='footer'>
      <Col>
        <div className='footer-social'>
          {
            socialMedia.map(media => (
              <Button key={`btn-${media.icon}`} href={media.url} target="_blank" className="social-media-btn">
                <i className={`bi bi-${media.icon}`}></i>
              </Button>
            ))
          }
        </div>
        <p className='mt-4 mb-0'>Crafted by <span className='highlight'>Vincent Pableo</span> © {currentYear}</p>
        {/* <Button 
          variant="link"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className='text-reset'
        >
          Powered by{' '}
          <Image src="/nextjs.png" alt="Vercel Logo" width={72} height={43} />
        </Button> */}
      </Col>
    </Row>
  )
}
