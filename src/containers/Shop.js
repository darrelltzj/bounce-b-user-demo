import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'antd'
import styled from 'styled-components'
import { dummyProducts, dummySuppliers } from '../constants/dummyData'

const StyledShopPage = styled.div`
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
    overflow: hidden;
    span {
      font-size: 3em;
    }
  }
  .home-subheader {
    font-size: 2em;
  }
  .custom-image img {
    display: block;
  }
  .custom-card {
    padding: 10px 16px;
  }
  .custom-card p {
    color: #999;
  }
  .custom-card p > strong {
    a:link {
      color: #999;
    }
  }

  main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export default class Shop extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dummyProducts,
      dummySuppliers
    }
  }

  render () {
    console.log(this.props)
    const dummyProductsList = dummyProducts.map(product => {
      return (
        <Card key={product._id} style={{ width: 240, height: 300, marginBottom: '2rem' }} bodyStyle={{ padding: 0 }}>
          <div className='custom-image'>
            <img alt='example' width='100%' height='100%' src={require(`../images/${product.img}`)} />
          </div>
          <div className='custom-card'>
            <h3><Link to={`/products/${product._id}`}>{product.name}</Link></h3>
            <p>{product.price} by <strong><Link to={`/companies/${dummySuppliers[product.supplier]._id}`}>{dummySuppliers[product.supplier].name}</Link></strong></p>
          </div>
        </Card>
      )
    })

    return (
      <StyledShopPage>
        <header>
          <span>Shop</span>
        </header>
        <span className='home-subheader'>
          Search Results
        </span>
        <Row>
          <Col xs={24} sm={18} md={18} style={{paddingRight: '1%'}}>
            <main>
              {dummyProductsList}
            </main>
          </Col>
          <Col xs={24} sm={6} md={6} style={{paddingLeft: '1%'}}>
            Recommendation
          </Col>
        </Row>
      </StyledShopPage>
    )
  }
}
