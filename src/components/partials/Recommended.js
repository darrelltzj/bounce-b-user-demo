import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import dictionary from '../../constants/dictionary'

import ArticleCard from '../home/ArticleCard'
import RecommendedProductCard from './RecommendedProductCard'
import {dummyProducts} from '../../constants/dummyData'

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
  const {translation, articles, products, recommendedProducts, recommendedArticles} = props
  return (
    <StyledRecommended>
      <h2>
        {translation === 'en' ? dictionary.youMightLikeThese.en : dictionary.youMightLikeThese.cn}
      </h2>
      <div style={{marginTop: 10}}>
        <h3>
          {translation === 'en' ? dictionary.products.en : dictionary.products.cn}
        </h3>
        {recommendedProducts.map((recommendedProduct, index) => {
          return (
            <RecommendedProductCard
              key={index}
              product={products[recommendedProduct]}
             />
          )
        })}
      </div>
      <div style={{marginTop: 10}}>
        <h3>
          {translation === 'en' ? dictionary.articles.en : dictionary.articles.cn}
        </h3>
        {recommendedArticles.map((recommendedArticle, index) => {
          return (
            <ArticleCard
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
  const {translation, articles, user} = state
  const {recommendedProducts, recommendedArticles} = user
  return {
    translation,
    articles,
    products: dummyProducts,
    recommendedProducts,
    recommendedArticles
  }
}

export default connect(mapStateToProps)(Recommended)
