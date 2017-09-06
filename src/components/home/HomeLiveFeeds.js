import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import HomeLiveFeed from './HomeLiveFeed'

const StyledHomeFeeds = styled.div`
  {
    margin: 2px;
  }
`

const HomeLiveFeeds = (props) => {
  const {liveFeeds} = props
  return (
    <StyledHomeFeeds>
      {liveFeeds.map((liveFeed, index) => {
        return (
          <HomeLiveFeed key={index} liveFeed={liveFeed} />
        )
      })}
    </StyledHomeFeeds>
  )
}

function mapStateToProps (state, props) {
  const {articles} = state
  return {
    liveFeeds: articles
  }
}

export default connect(mapStateToProps)(HomeLiveFeeds)
