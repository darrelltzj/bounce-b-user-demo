import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { handleTranslation } from '../actions/translations'
import dictionary from '../constants/dictionary'

import {ActionBar} from '../components/partials/ActionBar'
import Discussions from '../components/discussions/Discussions'
import Recommended from '../components/partials/Recommended'
import Chat from '../components/chat/Chat'

const StyledVideo = styled.div`
  {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media (max-width: 420px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

class Video extends React.Component {
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
    const {translation, video} = this.props
    return (
      <StyledVideo>
        <Row>
          <Col xs={24} sm={18} md={18} style={{paddingRight: '1%'}}>
            <h1>{video.title}</h1>
            <h2>
              {translation === 'en' ? dictionary.byAuthor.en : dictionary.byAuthor.cn}
              {' '}
              <Link to={`../profiles/${video.authorId}`}>
                {video.author}
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
                <iframe
                  width='100%'
                  height='360'
                  src={video.url}
                  frameBorder='0'
                  allowFullScreen />
                <Discussions toggleChat={this.toggleChat} />
                {this.state.toggleChat &&
                  <Chat
                    toggleChat={this.toggleChat}
                    author={this.state.toggleChat} />
                }
              </Col>
              <Col xs={0} sm={4} md={4}>
                <div style={{position: 'fixed', margin: '1%'}}>
                  <ActionBar />
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={0} sm={6} md={6}>
            <Recommended />
          </Col>
        </Row>
      </StyledVideo>
    )
  }
}

function mapStateToProps (state, props) {
  const {translation, videos} = state
  const {match} = props
  const {params} = match
  const {videoId} = params
  return {
    translation,
    video: videos.object[videoId]
  }
}

export default connect(mapStateToProps, {handleTranslation})(Video)
