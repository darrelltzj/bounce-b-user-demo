import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row, Col, Icon } from 'antd'

import HomeTrendings from '../components/home/HomeTrendings'
import HomePins from '../components/home/HomePins'
import image from '../images/1.jpg'

const StyledHomePage = styled.div`
  {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media (max-width: 420px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  header {
    margin-top: 1%;
    margin-bottom: 1%;
    width: 100%;
    height: 240px;
    overflow: hidden;
    background:
    linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ), url(${image}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
  }
`

const HomePage = (props) => {
  const {articles, pinnedArticles} = props
  return (
    <StyledHomePage>
      <Link to='./articles/2'>
        <header>
          <div style={{position: 'absolute', bottom: 0, margin: 10}}>
            <h1 style={{color: 'white'}}>
              Lorem ipsum dolor
            </h1>
            <h2 style={{color: 'white'}}>
              Author 1
            </h2>
            <span style={{color: 'white'}}>
              <small>
                featured
              </small>
            </span>
          </div>
        </header>
      </Link>
      <main>
        <Row>
          <Col xs={24} sm={6} md={6}
            style={{paddingRight: '1%'}}>
            <HomeTrendings articles={articles} />
          </Col>
          <Col xs={24} sm={18} md={18}
            style={{paddingLeft: '1%'}}>
            <h2>Pinned <Icon type='bars' style={{cursor: 'pointer'}} /></h2>
            <HomePins
              pinnedArticles={pinnedArticles} articles={articles}
            />
          </Col>
        </Row>
      </main>
    </StyledHomePage>
  )
}

function mapStateToProps (state, props) {
  const {articles, user} = state
  const {pinnedArticles} = user
  return {
    articles,
    pinnedArticles
  }
}

export default connect(mapStateToProps)(HomePage)
