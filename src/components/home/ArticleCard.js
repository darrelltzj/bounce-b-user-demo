import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {ActionBar} from '../partials/ActionBar'
import dictionary from '../../constants/dictionary'

const StyledTrending = styled.div`
  {
    height: 180px;
    margin: 1%;
    overflow: hidden;
    position: relative;
  }
`

const HomeArticleCard = (props) => {
  const {translation, article} = props
  return (
    <StyledTrending>
      <Link to={`/articles/${article._id}`}>
        <img
          src={require(`../../images/${article.img}`)}
          alt={article.title}
          style={{width: '100%', position: 'absolute', bottom: 0}} />
      </Link>
      <div
        style={{
          height: 90,
          width: '80%',
          padding: 10,
          backgroundColor: 'white',
          zIndex: 2,
          position: 'absolute',
          bottom: 0}}>
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
