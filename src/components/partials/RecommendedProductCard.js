import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import dictionary from '../../constants/dictionary'

import {ActionBar} from './ActionBar'

const ProductCard = styled.div`
  {
    height: auto;
    margin: 1%;
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
            alt={translation === 'en' ? product.name.en : product.name.cn}
            style={{width: '100%'}} />
        </Link>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <p>
            <strong>
              {translation === 'en' ? product.name.en : product.name.cn}
            </strong>
          </p>
          <p>
            {translation === 'en' ? dictionary.bySeller.en : dictionary.bySeller.cn}
            {' '}
            <Link
              to={`/companies/${product.supplier}`}
              style={{color: 'grey'}}
              >
              {`Company ${product.supplier}`}
            </Link>
          </p>
          <p>
            {translation === 'en' ? dictionary.price.en : dictionary.price.cn}
            {': '}
            {product.price}
          </p>
        </div>
        <ActionBar />
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
