import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import HomeTrending from './HomeTrending'

const StyledTrendings = styled.div`
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

const HomeTrendings = (props) => {
  const {liveFeeds} = props
  return (
    <StyledTrendings>
      {liveFeeds.map((liveFeed, index) => {
        return (
          <HomeTrending key={index} liveFeed={liveFeed} />
        )
      })}
    </StyledTrendings>
  )
}

function mapStateToProps (state, props) {
  const {articles} = state
  return {
    liveFeeds: articles
  }
}

export default connect(mapStateToProps)(HomeTrendings)
