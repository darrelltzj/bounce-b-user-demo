import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Icon } from 'antd'

import HomeArticleCard from './HomeArticleCard'

const StyledPin = styled.div`
  {
    width: 33%;
    padding: 10px;
  }
  @media (max-width: 420px) {
    width: 98%;
  }
`

const HomePin = (props) => {
  const {pinnedArticle, articles} = props
  return (
    <StyledPin>
      <h2>
        {pinnedArticle.title}{' '}
        <Icon type={'tag'} style={{cursor: 'pointer'}} />
      </h2>
      {pinnedArticle.articles.map((article, index) => {
        return (
          <HomeArticleCard
            key={index}
            article={articles.object[article]}
            pinned
           />
        )
      })}
    </StyledPin>
  )
}

export default connect(null)(HomePin)
