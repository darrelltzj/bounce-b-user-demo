import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import Recommended from '../components/partials/Recommended'

const StyledProfile = styled.div`
  {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media (max-width: 420px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

const Profile = () => {
  return (
    <StyledProfile>
      <Row>
        <Col xs={24} sm={18} md={18} style={{paddingRight: '1%'}}>
          <h1>Profile</h1>
        </Col>
        <Col xs={0} sm={6} md={6}>
          <Recommended />
        </Col>
      </Row>
    </StyledProfile>
  )
}

function mapStateToProps (state, props) {
  return {
  }
}

export default connect(mapStateToProps)(Profile)
