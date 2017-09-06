import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row, Col } from 'antd'

const StyledHomeFeed = styled.div`
  {
    height: 80px;
    margin-top: 4px;
    margin-bottom: 4px;
    border: 1px solid silver;
    padding: 10px;
  }
`

const HomeLiveFeeds = (props) => {
  const {liveFeed} = props
  return (
    <StyledHomeFeed>
      <Row>
        <Col xs={23}>
          <p><strong>{liveFeed.title}</strong></p>
          <p>By: {liveFeed.author}</p>
          <p>Date: {liveFeed.date}</p>
        </Col>
        <Col xs={1}>
          <span style={{fontSize: 18}}>{'+'}</span>
        </Col>
      </Row>


    </StyledHomeFeed>
  )
}

export default connect(null)(HomeLiveFeeds)
