import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Icon } from 'antd'

const StyledTrending = styled.div`
  {
    height: 100px;
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

const HomeArticleCard = (props) => {
  const {article, pinned} = props
  return (
    <StyledTrending>
      <div style={{width: '30%', maxHeight: '99%', overflow: 'hidden'}}>
        <Link to={`/articles/${article._id}`}>
          <img
            src={require(`../../images/${article.img}`)}
            alt={article.title}
            style={{width: '100%'}} />
        </Link>
      </div>
      <div>
        <p><strong>{article.title}</strong></p>
        <p>
          By:{' '}
          <Link
            to={`/profiles/${article.authorId}`}
            style={{color: 'grey'}}
            >
            {article.author}
          </Link>
        </p>
        <p>Date: {article.date}</p>
      </div>
      <div>
        <span style={{fontSize: '1.2em', cursor: 'pointer'}}>
          <Icon type={pinned ? 'pushpin' : 'pushpin-o'} />
        </span>
      </div>
    </StyledTrending>
  )
}

export default connect(null)(HomeArticleCard)
