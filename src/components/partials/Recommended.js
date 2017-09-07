import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import HomeArticleCard from '../home/HomeArticleCard'
import RecommendedProductCard from './RecommendedProductCard'

const StyledRecommended = styled.aside`
  {
    padding: 1%;
    height: 100%;
  }
  @media (max-width: 420px) {
    display: none;
  }
`

const Recommended = (props) => {
  const {articles, products, recommendedProducts, recommendedArticles} = props
  return (
    <StyledRecommended>
      <h3>Recommended</h3>
      <div>
        <h4>Products</h4>
        {recommendedProducts.map((recommendedProduct, index) => {
          return (
            <RecommendedProductCard
              key={index}
              product={products.object[recommendedProduct]}
             />
          )
        })}
      </div>
      <div>
        <h4>Articles</h4>
        {recommendedArticles.map((recommendedArticle, index) => {
          return (
            <HomeArticleCard
              key={index}
              article={articles.object[recommendedArticle]}
             />
          )
        })}
      </div>
    </StyledRecommended>
  )
}

function mapStateToProps (state, props) {
  const {articles, products, user} = state
  const {recommendedProducts, recommendedArticles} = user
  return {
    articles,
    products,
    recommendedProducts,
    recommendedArticles
  }
}

export default connect(mapStateToProps)(Recommended)
