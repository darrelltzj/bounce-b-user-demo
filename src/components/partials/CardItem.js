import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'
import { ActionBar } from './ActionBar'

export const CardItem = ({ _id, img, header, subHeader }) => {
  const StyledCardItem = styled.div`
    .custom-image img {
      display: block;
    }
    .custom-card {
      padding: 10px 16px;
    }
  `
  return (
    <StyledCardItem>
      <Card key={_id} style={{ width: 240, marginBottom: '2rem' }} bodyStyle={{ padding: 0 }}>
        <div className='custom-image'>
          <img alt='example' width='100%' height='100%' src={require(`images/${img}`)} />
        </div>
        <div className='custom-card'>
          {header}
          {subHeader}
          <ActionBar />
        </div>
      </Card>
    </StyledCardItem>
  )
}
