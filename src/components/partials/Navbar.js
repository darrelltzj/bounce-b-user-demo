import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Form, Icon, Input } from 'antd'

const StyledNavbar = styled.div`
  {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 10%;
    margin-right: 10%;
    height: 48px;
  }
  @media (max-width: 420px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  div a {
    color: black;
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <Link to='#'>
          LOGO
        </Link>
      </div>
      <div style={{ width: '50%' }}>
        <Form>
          <Input
            prefix={<Icon type='search' style={{ fontSize: 12 }} />}
            placeholder='Search'
           />
        </Form>
      </div>
      <div>
        <Link to='#'>
          <Icon type='user' style={{ fontSize: 20, color: 'black' }} />
        </Link>
      </div>
    </StyledNavbar>
  )
}

export default connect(null)(Navbar)
