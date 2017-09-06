import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row, Col } from 'antd'

// import homePageImage from '../images/home-page-hero.jpg'
import HomeLiveFeeds from '../components/home/HomeLiveFeeds'

const StyledHomePage = styled.div`
  .home-page-image-container {
    width: 100%;
    height: 180px;
    background-color: black;
    ${'' /* background-image: url(${homePageImage}); */}
    background-position: center;
    overflow: hidden;
  }
  .home-page-image-container img {
    width:100%;
    filter: brightness(80%);
  }
`

const HomePage = () => {
  return (
    <StyledHomePage>
      <header className='home-page-image-container'>
        {/* <img src={homePageImage} /> */}
      </header>
      <section>
        <Row>
          <Col xs={24} sm={24} md={8}>
            <HomeLiveFeeds />
          </Col>
          <Col xs={24} sm={24} md={16}>
            PINNED
          </Col>
        </Row>
      </section>
    </StyledHomePage>
  )
}

// function mapStateToProps (state, props) {
//   return {
//   }
// }

export default connect(null)(HomePage)
