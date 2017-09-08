import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import dictionary from '../../constants/dictionary'

import HomeArticleCard from './HomeArticleCard'

const StyledTrendings = styled.div`
  {
    padding-right: 5%;
  }
  @media (max-width: 991px) {
    position: relative;
  }
  @media (max-width: 420px) {
    padding-right: 10px;
  }
`

const HomeTrendings = (props) => {
  const {translation, articles} = props
  return (
    <StyledTrendings>
      <h2>
        {translation === 'en' ? dictionary.trending.en : dictionary.trending.cn}
      </h2>
      {articles.array.map((article, index) => {
        return (
          <HomeArticleCard key={index} article={articles.object[article]} />
        )
      })}
    </StyledTrendings>
  )
}

function mapStateToProps (state, props) {
  const {translation} = state
  return {
    translation
  }
}

export default connect(mapStateToProps)(HomeTrendings)
