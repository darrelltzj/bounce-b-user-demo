import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import dictionary from '../../constants/dictionary'

const ProductCard = styled.div`
  {
    height: auto;
    margin: 1%;
    border: 1px solid silver;
    padding: 2%;
  }
`

const recommendedProductCard = (props) => {
  const {translation, product} = props
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
          {translation === 'en' ? dictionary.bySeller.en : dictionary.bySeller.cn}
          {' '}
          <Link
            to={`/companies/${product.companyId}`}
            style={{color: 'grey'}}
            >
            {`Company ${product.companyId}`}
          </Link>
        </p>
        <p>
          {translation === 'en' ? dictionary.price.en : dictionary.price.cn}
          {': $'}
          {product.price}
        </p>
      </div>
    </ProductCard>
  )
}

function mapStateToProps (state, props) {
  const {translation} = state
  return {
    translation
  }
}

export default connect(mapStateToProps)(recommendedProductCard)
