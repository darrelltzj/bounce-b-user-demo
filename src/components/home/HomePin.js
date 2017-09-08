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
  const {translation, pinnedArticle, articles, videos} = props
  const {title, articleIds, videoIds} = pinnedArticle
  return (
    <StyledPin>
      <h2>
        {translation === 'en' ? title.en : title.cn}
        {' '}
        <Icon type={'tag'} style={{cursor: 'pointer'}} />
      </h2>
      <div style={{border: '1px solid silver'}}>
        {articleIds && articleIds.map((article, index) => {
          return (
            <HomeArticleCard
              key={index}
              article={articles.object[article]}
              pinned
            />
          )
        })}
        {videoIds && videoIds.map((video, index) => {
          return (
            <HomeArticleCard
              key={index}
              article={videos.object[video]}
              video
            />
          )
        })}
      </div>
    </StyledPin>
  )
}

function mapStateToProps (state, props) {
  const {translation} = state
  return {
    translation
  }
}

export default connect(mapStateToProps)(HomePin)
