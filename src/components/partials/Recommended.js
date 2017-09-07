import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledRecommended = styled.aside`
  {
    position: fixed;
    overflow: scroll;
    padding: 1%;
    border-left: 1px solid silver;
    height: 100%;
  }
  @media (max-width: 420px) {
    display: none;
  }
`

const Recommended = () => {
  return (
    <StyledRecommended>
      <h3>Recommended</h3>
      <div>
        <h4>Products</h4>
      </div>
      <div>
        <h4>Articles</h4>
      </div>
    </StyledRecommended>
  )
}

export default connect(null)(Recommended)
