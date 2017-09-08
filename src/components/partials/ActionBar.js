import React from 'react'
import { Tooltip, Row, Col, Icon } from 'antd'
import styled from 'styled-components'

const StyledActionDiv = styled.div`
  {
    display: flex;
    flex-direction: row-reverse;
    width: inherit;
    margin: 0.5rem;
  }

  .action-icon {
    cursor: pointer;
    font-size: 1.2rem;
  }
`

export const ActionBar = props => {
  return (
    <StyledActionDiv>
      <Row gutter={8}>
        <Col xs={8} sm={8} md={8}>
          <Tooltip placement='top' title={'Favourite'}>
            <Icon className='action-icon' type='heart-o' style={{color: 'rgb(249, 57, 57)'}} />
          </Tooltip>
        </Col>
        <Col xs={8} sm={8} md={8}>
          <Tooltip placement='top' title={'Bookmark'}>
            <Icon className='action-icon' type='book' style={{color: 'rgb(88, 144, 252)'}} />
          </Tooltip>
        </Col>
        <Col xs={8} sm={8} md={8}>
          <Tooltip placement='top' title={'Share'}>
            <Icon className='action-icon' type='share-alt' />
          </Tooltip>
        </Col>
      </Row>
    </StyledActionDiv>
  )
}
