import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import HomeTrendings from '../components/home/HomeTrendings'
import HomePins from '../components/home/HomePins'

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
    width: 100%;
    height: 60px;
    overflow: hidden;
    span {
      font-size: 3em;
    }
  }
  .home-subheader {
    font-size: 2em;
  }
`

const HomePage = (props) => {
  const {liveFeeds, pinnedArticles} = props
  return (
    <StyledHomePage>
      <header>
        <span>Articles</span>
      </header>
      <main>
        <Row>
          <Col xs={24} sm={18} md={18} style={{paddingRight: '1%'}}>
            <span className='home-subheader'>
              Trending
            </span>
            <HomeTrendings liveFeeds={liveFeeds} />
          </Col>
          <Col xs={24} sm={6} md={6} style={{paddingLeft: '1%'}}>
            <HomePins pinnedArticles={pinnedArticles} />
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
    liveFeeds: articles,
    pinnedArticles
  }
}

export default connect(mapStateToProps)(HomePage)
