import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row, Col, Icon } from 'antd'

const StyledHomeTrending = styled.div`
  {
    height: 120px;
    margin: 1%;
    border: 1px solid silver;
    padding: 2%;
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const HomePin = (props) => {
  const {pinnedArticle} = props
  return (
    <StyledHomeTrending>
      <div style={{width: '30%', maxHeight: '99%', overflow: 'hidden'}}>
        <Link to={`/articles/${pinnedArticle._id}`}>
          <img
            src={require(`../../images/${pinnedArticle.img}`)}
            style={{width: '100%'}} />
        </Link>
      </div>
      <div>
        <p><strong>{pinnedArticle.title}</strong></p>
        <p>By: {pinnedArticle.author}</p>
        <p>Date: {pinnedArticle.date}</p>
      </div>
      <div>
        <span style={{fontSize: '1.2em', cursor: 'pointer'}}>
          <Icon type='pushpin' />
        </span>
      </div>
    </StyledHomeTrending>
  )
}

export default connect(null)(HomePin)
