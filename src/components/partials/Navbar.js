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
    padding-left: 5%;
    padding-right: 5%;
    height: 56px;
    width:100%;
    background-color: white;
    border-bottom: 1px solid #e5e5e5;
    top: 0;
    position: sticky;
    z-index: 2;
  }
  @media (max-width: 420px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  div a {
    color: black;
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <Link to='/' style={{ fontSize: '1.4em' }}>
          Bounce-B
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
        <Link to='/'>
          <Icon type='user' style={{ fontSize: '2em', color: 'black' }} />
        </Link>
      </div>
    </StyledNavbar>
  )
}

export default connect(null)(Navbar)
