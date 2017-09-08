import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row, Col, Icon } from 'antd'
import { handleTranslation } from '../actions/translations'
import dictionary from '../constants/dictionary'

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

class HomePage extends React.Component {
  handleClickTranslation (language) {
    this.props.handleTranslation(language)
  }
  render () {
    const {translation, articles, videos, pinnedArticles} = this.props
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
                  {translation === 'en' ? dictionary.featured.en : dictionary.featured.cn}
                </small>
              </span>
            </div>
          </header>
        </Link>
        <div>
          <a onClick={() => this.handleClickTranslation('en')}>
            en
          </a>
          {' | '}
          <a onClick={() => this.handleClickTranslation('cn')}>
            cn
          </a>
        </div>
        <main>
          <Row>
            <Col xs={24} sm={6} md={6}
              style={{paddingRight: '1%'}}>
              <HomeTrendings articles={articles} />
            </Col>
            <Col xs={24} sm={18} md={18}
              style={{paddingLeft: '1%'}}>
              <h2>
                {translation === 'en' ? dictionary.pinned.en : dictionary.pinned.cn}
                {' '}
                <Icon type='bars' style={{cursor: 'pointer'}} />
              </h2>
              <HomePins
                pinnedArticles={pinnedArticles} articles={articles} videos={videos}
              />
            </Col>
          </Row>
        </main>
      </StyledHomePage>
    )
  }
}

function mapStateToProps (state, props) {
  const {translation, articles, videos, user} = state
  const {pinnedArticles} = user
  return {
    translation,
    articles,
    videos,
    pinnedArticles
  }
}

export default connect(mapStateToProps, {handleTranslation})(HomePage)
