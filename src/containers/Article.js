import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import Recommended from '../components/partials/Recommended'

const StyledArticle = styled.div`
  {
    padding-left: 5%;
  }
  @media (max-width: 420px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

const Article = (props) => {
  const {article} = props
  return (
    <StyledArticle>
      <Row>
        <Col xs={24} sm={18} md={18} style={{paddingRight: '1%'}}>
          <h1>{article.title}</h1>
          <h2>By <Link to={`../profiles/${article.authorId}`}>{article.author}</Link></h2>
          <Row>
            <Col xs={24} sm={18} md={18}>
              <div
                style={{
                  width: '100%',
                  height: '300px',
                  overflow: 'hidden',
                  marginTop: '1%',
                  marginBottom: '1%'
                }}>
                <img
                  src={require(`../images/${article.img}`)}
                  alt={article.title}
                  style={{width: '100%', margin: '-45% 0'}} />
              </div>
              <p style={{whiteSpace: 'pre-line', marginTop: '1%'}}>
                {article.text}
              </p>
            </Col>
            <Col xs={0} sm={6} md={6}>
              <div style={{position: 'fixed', margin: '1%'}}>
                <span style={{cursor: 'pointer'}}>
                  Save
                </span>
                {' | '}
                <span style={{cursor: 'pointer'}}>
                  Follow
                </span>
                {' | '}
                <span style={{cursor: 'pointer'}}>
                  Share
                </span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={0} sm={6} md={6}>
          <Recommended />
        </Col>
      </Row>
    </StyledArticle>
  )
}

function mapStateToProps (state, props) {
  const {articles} = state
  const {match} = props
  const {params} = match
  const {articleId} = params
  return {
    article: articles.object[articleId]
  }
}

export default connect(mapStateToProps)(Article)
