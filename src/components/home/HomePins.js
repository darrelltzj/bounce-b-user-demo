import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Icon } from 'antd'

import HomePin from './HomePin'

const StyledTrendings = styled.div`
  {
    position: fixed;
    padding-right: 5%;
    overflow: scroll;
  }
  @media (max-width: 991px) {
    position: relative;
  }
  @media (max-width: 420px) {
    padding-right: 10px;
  }
`

const HomeTrendings = (props) => {
  const {pinnedArticles} = props
  return (
    <StyledTrendings>
      <span className='home-subheader'>
        Pinned <Icon type='pushpin' />
      </span>
      {pinnedArticles.map((pinnedArticle, index) => {
        return (
          <HomePin key={index} pinnedArticle={pinnedArticle} />
        )
      })}
    </StyledTrendings>
  )
}

export default connect(null)(HomeTrendings)
