import React from 'react'
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
          {article.title}
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
