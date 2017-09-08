import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'antd'
import styled from 'styled-components'

import Recommended from '../components/partials/Recommended'
import { dummyProducts, dummySuppliers } from '../constants/dummyData'
import { CardItem } from '../components/partials/CardItem'

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
    const dummyProductsList = dummyProducts.map(product => {
      return (
        <CardItem
          _id={product._id}
          img={product.img}
          header={<h3><Link to={`/products/${product._id}`}>{product.name}</Link></h3>}
          subHeader={<p>{product.price} by <strong>
            <Link style={{ color: '#666' }} to={`/companies/${dummySuppliers[product.supplier]._id}`}>{dummySuppliers[product.supplier].name}</Link>
          </strong></p>}
        />

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
            <Recommended />
          </Col>
        </Row>
      </StyledShopPage>
    )
  }
}
