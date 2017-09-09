import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row, Col, Card, Icon } from 'antd'
import { handleTranslation } from '../actions/translations'
import { dummyAuthors } from '../constants/dummyData'
import Dictionary from '../constants/dictionary'
import Chat from '../components/chat/Chat'

import { shortDescription } from '../constants/placeholders'
import Recommended from '../components/partials/Recommended'
import { ActionBar } from '../components/partials/ActionBar'

const StyledProfile = styled.div`
  {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media (max-width: 420px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 60px;
    overflow: hidden;
    span {
      font-size: 3em;
    }
  }
  .profile-subheader {
    font-size: 2em;
  }
  .profile-autocomplete {
    width: 100%;
  }
  .profile-header-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    div {
      margin-left: 3rem;
    }
  }
  main {
    section + section {
      margin-top: 2rem;
    }
  }
`

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toggleChat: false,
      ...dummyAuthors[props.match.params.profileId]
    }
    this.handleLangChange = this.handleLangChange.bind(this)
    this.toggleChat = this.toggleChat.bind(this)
  }

  toggleChat (author) {
    this.setState({
      toggleChat: author
    })
  }

  handleLangChange (event) {
    this.props.handleTranslation(event.target.dataset.lang)
  }
  render () {
    const { name, toggleChat: toggleChatState } = this.state
    const lang = this.props.translation
    const { handleLangChange, toggleChat } = this
    return (
      <StyledProfile>
        <Row>
          <Col xs={24} sm={18} md={18} style={{paddingRight: '1%'}}>
            <header>
              <div className='profile-header-left'>
                <span>{name[lang]}</span>
                <span
                  style={{
                    marginLeft: '1rem',
                    cursor: 'pointer',
                    fontSize: '1.6em',
                    float: 'right',
                    right: 0}}
                  onClick={() => toggleChat(true)}
                >
                  <Icon type='message' />
                </span>

                <div>
                  <a data-lang='en' onClick={handleLangChange}>en</a> | <a data-lang='cn' onClick={handleLangChange}>cn</a>
                </div>
              </div>
              <ActionBar />
            </header>
            <main>
              <section>
                <Row>
                  <Col xs={24} sm={24} md={24} style={{paddingRight: '1%'}}>
                    <p>
                      {shortDescription}
                    </p>
                  </Col>
                </Row>
              </section>
              <section>
                <Row>
                  <Col xs={24} sm={24} md={24} style={{paddingRight: '1%'}}>
                    <span className='profile-subheader'>
                      {Dictionary.articles[lang]}
                    </span>
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                      <Row gutter={16}>
                        <Col span={8}>
                          <Card title={Dictionary.articles[lang]} bordered={false}>{shortDescription}</Card>
                        </Col>
                        <Col span={8}>
                          <Card title={Dictionary.articles[lang]} bordered={false}>{shortDescription}</Card>
                        </Col>
                        <Col span={8}>
                          <Card title={Dictionary.articles[lang]} bordered={false}>{shortDescription}</Card>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </section>
            </main>
          </Col>
          <Col xs={24} sm={6} md={6} style={{paddingLeft: '1%'}}>
            <Recommended />
          </Col>
        </Row>
        {toggleChatState &&
          <Chat
            toggleChat={toggleChat}
            author={name[lang]} />
        }
      </StyledProfile>
    )
  }
}

function mapStateToProps (state, props) {
  const {translation} = state
  return {
    translation
  }
}

export default connect(mapStateToProps, {handleTranslation})(Profile)
