import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {ActionBar} from '../partials/ActionBar'
import dictionary from '../../constants/dictionary'

const StyledTrending = styled.div`
  {
    height: auto;
    margin: 2px;
    ${'' /* border: 1px solid silver; */}
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
  const {translation, article} = props
  return (
    <StyledTrending>
      <div style={{width: '50%', height: '99%', overflow: 'hidden'}}>
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
          {translation === 'en' ? dictionary.byAuthor.en : dictionary.byAuthor.cn}
          {': '}
          <Link
            to={`/profiles/${article.authorId}`}
            style={{color: 'grey'}}
            >
            {article.author}
          </Link>
        </p>
        <p>
          {translation === 'en' ? dictionary.date.en : dictionary.date.cn}
          {': '}
          {article.date}
        </p>
        <ActionBar />
      </div>
    </StyledTrending>
  )
}

function mapStateToProps (state, props) {
  const {translation} = state
  return {
    translation
  }
}

export default connect(mapStateToProps)(HomeArticleCard)
