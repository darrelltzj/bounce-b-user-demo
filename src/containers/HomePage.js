import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row, Col, Icon } from 'antd'

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
    height: 20px;
    overflow: hidden;
  }
`

const HomePage = (props) => {
  const {articles, pinnedArticles} = props
  return (
    <StyledHomePage>
      <header>
        {/* <h1>Articles</h1> */}
      </header>
      <main>
        <Row>
          <Col xs={24} sm={6} md={6} style={{paddingRight: '1%'}}>
            <HomeTrendings articles={articles} />
          </Col>
          <Col xs={24} sm={18} md={18} style={{paddingLeft: '1%'}}>
            <h2>Pinned <Icon type='pushpin' /></h2>
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
