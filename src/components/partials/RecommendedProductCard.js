import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

const ProductCard = styled.div`
  {
    height: auto;
    margin: 1%;
    border: 1px solid silver;
    padding: 2%;
  }
`

const recommendedProductCard = (props) => {
  const {product} = props
  return (
    <ProductCard>
      <div style={{width: '100%'}}>
        <Link to={`/products/${product._id}`}>
          <img
            src={require(`../../images/${product.img}`)}
            alt={product.title}
            style={{width: '100%'}} />
        </Link>
      </div>
      <div>
        <p><strong>{product.name}</strong></p>
        <p>
          By:{' '}
          <Link
            to={`/companies/${product.companyId}`}
            style={{color: 'grey'}}
            >
            {`Company ${product.companyId}`}
          </Link>
        </p>
        <p>Price: ${product.price}</p>
      </div>
    </ProductCard>
  )
}

export default connect(null)(recommendedProductCard)
