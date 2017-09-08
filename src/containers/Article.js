import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { handleTranslation } from '../actions/translations'
import dictionary from '../constants/dictionary'

import Discussions from '../components/discussions/Discussions'
import Recommended from '../components/partials/Recommended'
import Chat from '../components/chat/Chat'

const StyledArticle = styled.div`
  {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media (max-width: 420px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

class Article extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toggleChat: false
    }
    this.toggleChat = this.toggleChat.bind(this)
    this.handleClickTranslation = this.handleClickTranslation.bind(this)
  }

  toggleChat (author) {
    this.setState({
      toggleChat: author
    })
  }

  handleClickTranslation (language) {
    this.props.handleTranslation(language)
  }

  render () {
    const {translation, article} = this.props
    return (
      <StyledArticle>
        <Row>
          <Col xs={24} sm={18} md={18} style={{paddingRight: '1%'}}>
            <h1>{article.title}</h1>
            <h2>
              By
              {' '}
              <Link to={`../profiles/${article.authorId}`}>
                {article.author}
              </Link>
            </h2>
            <div>
              <a onClick={() => this.handleClickTranslation('en')}>
                en
              </a>
              {' | '}
              <a onClick={() => this.handleClickTranslation('cn')}>
                cn
              </a>
            </div>
            <Row>
              <Col xs={24} sm={20} md={20}>
                <div
                  style={{
                    width: '100%',
                    height: '300px',
                    overflow: 'hidden',
                    marginTop: '1%',
                    marginBottom: '1%'
                  }}>
                  <img
                    src={require(`../images/${article.img}`)}
                    alt={article.title}
                    style={{width: '100%', margin: '-45% 0'}} />
                </div>
                <p style={{whiteSpace: 'pre-line', marginTop: '1%'}}>
                  {article.text}
                </p>
                <Discussions toggleChat={this.toggleChat} />
                {this.state.toggleChat &&
                  <Chat
                    toggleChat={this.toggleChat}
                    author={this.state.toggleChat} />
                }
              </Col>
              <Col xs={0} sm={4} md={4}>
                <div style={{position: 'fixed', margin: '1%'}}>
                  <span style={{cursor: 'pointer'}}>
                    Save
                  </span>
                  {' | '}
                  <span style={{cursor: 'pointer'}}>
                    Follow
                  </span>
                  {' | '}
                  <span style={{cursor: 'pointer'}}>
                    Share
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={0} sm={6} md={6}>
            <Recommended />
          </Col>
        </Row>
      </StyledArticle>
    )
  }
}

function mapStateToProps (state, props) {
  const {translation, articles} = state
  const {match} = props
  const {params} = match
  const {articleId} = params
  return {
    translation,
    article: articles.object[articleId]
  }
}

export default connect(mapStateToProps, {handleTranslation})(Article)
