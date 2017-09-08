import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Form, Input } from 'antd'
import dictionary from '../../constants/dictionary'

const StyledChat = styled.aside`
  {
    height: 400px;
    width: 280px;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: white;
    border: 1px solid grey;
    margin-right: 6%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    overflow: hidden;
  }
  @media (max-width: 820px) {
    left: 0;
    margin-left: 10px;
    margin-right: 0;
  }
`

const Chat = (props) => {
  const {translation, toggleChat, author} = props
  return (
    <StyledChat>
      <div style={{position: 'relative'}}>
        <div
          style={{height: 30, backgroundColor: 'black', cursor: 'pointer'}}
          onClick={() => toggleChat(false)}>
          <span style={{marginLeft: 10, color: 'white'}}>
            <strong>
              {author}
            </strong>
          </span>
        </div>
        <Form style={{position: 'fixed', bottom: 10, width: 278}}>
          <Input
            type='textarea'
            placeholder={translation === 'en' ? dictionary.sendAPrivateMessage.en : dictionary.sendAPrivateMessage.cn}
            rows={4}
           />
        </Form>
      </div>
    </StyledChat>
  )
}

function mapStateToProps (state, props) {
  const {translation} = state
  return {
    translation
  }
}

export default connect(mapStateToProps)(Chat)
