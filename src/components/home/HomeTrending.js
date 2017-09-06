import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row, Col, Icon } from 'antd'

const StyledHomeTrending = styled.div`
  {
    width: 31%;
    margin: 1%;
    ${'' /* border: 1px solid silver; */}
    padding: 10px;
  }
  @media (max-width: 420px) {
    width: 98%;
  }
`

const HomeTrending = (props) => {
  const {liveFeed} = props
  return (
    <StyledHomeTrending>
      <Link to={`/articles/${liveFeed._id}`}>
        <img
          src={require(`../../images/${liveFeed.img}`)}
          alt={liveFeed.title}
          style={{width: '100%'}} />
      </Link>
      <Row>
        <Col xs={23}>
          <p><strong>{liveFeed.title}</strong></p>
          <p>By: {liveFeed.author}</p>
          <p>Date: {liveFeed.date}</p>
        </Col>
        <Col xs={1}>
          <span style={{fontSize: '1.2em', cursor: 'pointer'}}>
            <Icon type='pushpin-o' />
          </span>
        </Col>
      </Row>
      <p style={{marginTop: '1%'}}>
        {liveFeed.shortDescription}
      </p>
    </StyledHomeTrending>
  )
}

export default connect(null)(HomeTrending)
