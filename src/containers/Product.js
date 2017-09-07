import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, InputNumber, Form, Button, Icon, Divider } from 'antd'
import styled from 'styled-components'
import { dummyProducts, dummySuppliers } from '../constants/dummyData'

import { shortDescription, title, text } from '../constants/placeholders'

const StyledHomePage = styled.div`
  img {
    width: 100%;
  }
  {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media (max-width: 420px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  header {
    width: 100%;
    height: 60px;
    span {
      font-size: 3em;
    }
  }
  .product-subheader {
    font-size: 1em;
  }
  .product-subheader2 {
    font-size: 2em;
  }
  .product-container {
    section + section {
      margin-top: 1rem;
    }
  }
`

export default class Product extends React.Component {
  constructor (props) {
    console.log(props)
    super(props)
    this.state = {
      product: dummyProducts[props.match.params.productId]
    }
  }

  render () {
    const { name, price, img, supplier } = this.state.product
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 22 }
      }
    }
    return (
      <StyledHomePage>
        <Row gutter={16}>
          <Col xs={24} sm={4} md={4}>
            <img src={require(`../images/${img}`)} alt='product image' />
          </Col>
          <Col xs={24} sm={20} md={20}>
            <div className='product-container'>
              <header>
                <span>{name}</span>
                {` by `}
                <span className='product-subheader'>
                  <Link to={`/companies/${dummySuppliers[supplier]._id}`}>{dummySuppliers[supplier].name}</Link>
                </span>
              </header>
              <section>
                <Row>
                  <Col xs={24} sm={2} md={2}>Price: </Col>
                  <Col xs={24} sm={22} md={22}>{price}</Col>
                </Row>
                <Row>
                  <Col xs={24} sm={2} md={2}>Quantity: </Col>
                  <Col xs={24} sm={22} md={22}>
                    <InputNumber min={1} max={10} defaultValue={3} onChange />
                  </Col>
                </Row>
              </section>

              <section>
                <Button.Group>
                  <Button type='primary'>
                    <Icon type='shopping-cart' />Add to Cart
                  </Button>
                  <Button>
                    <Icon type='heart' />Favourite
                  </Button>
                </Button.Group>
              </section>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={24} sm={24} md={24}>
            <div className='product-container'>
              <section>
                <span className='product-subheader2'>Description</span>
                <p>{text}</p>
              </section>
            </div>
          </Col>
        </Row>
      </StyledHomePage>
    )
  }
}
