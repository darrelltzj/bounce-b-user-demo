import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Form, Input, Icon } from 'antd'

const StyledDiscussions = styled.aside`
  {
    margin-top: 30px;
    width: 100%;
  }
`

const Discussions = (props) => {
  const {comments, toggleChat} = props
  return (
    <StyledDiscussions>
      <div>
        <h2>Discussions</h2>
        <Form>
          <Input
            type='textarea'
            rows={4}
            placeholder='Start a discussion'
           />
        </Form>
        {comments.map((comment, index) => {
          let {user} = comment
          return (
            <div
              key={index}
              style={{
                marginTop: 10,
                marginBottom: 10,
                padding: 10,
                border: '1px solid silver',
                borderRadius: 8,
                fontSize: '1em'
              }}
              >
              <span>
                <strong style={{fontSize: '1.2em'}}>
                  <Link to={`../profiles/${comment.userId}`}>
                    <Icon type='user' />
                    {comment.user}
                  </Link>
                </strong>
              </span>
              <span
                style={{
                cursor: 'pointer',
                fontSize: '1.6em',
                float: 'right',
                right: 0}}
                onClick={() => toggleChat(user)}
                >
                <Icon type='message' />
              </span>
              <p>
                <small>
                  {comment.date}
                </small>
              </p>
              <p style={{marginTop: 10, marginBottom: 10}}>
                {comment.comment}
              </p>
            </div>
          )
        })}
      </div>
    </StyledDiscussions>
  )
}

function mapStateToProps (state, props) {
  let comments = []
  for (let i = 1; i < 5; i++) {
    let userId = Math.round(Math.random() * 3 + 1)
    comments.push({
      _id: 1,
      userId,
      user: `Author ${userId}`,
      date: '09/09/2017',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    })
  }
  return {
    comments
  }
}

export default connect(mapStateToProps)(Discussions)
