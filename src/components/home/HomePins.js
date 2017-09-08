import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import HomePin from './HomePin'

const StyledPins = styled.div`
  {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
  }
`

const HomePins = (props) => {
  const {pinnedArticles, articles} = props
  return (
    <StyledPins>
      {pinnedArticles.map((pinnedArticle, index) => {
        return (
          <HomePin
            key={index}
            pinnedArticle={pinnedArticle}
            articles={articles} />
        )
      })}
    </StyledPins>
  )
}

export default connect(null)(HomePins)
