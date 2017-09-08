import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import dictionary from '../../constants/dictionary'

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
  const {translation, articles, products, recommendedProducts, recommendedArticles} = props
  return (
    <StyledRecommended>
      <h3>
        {translation === 'en' ? dictionary.youMightLikeThese.en : dictionary.youMightLikeThese.cn}
      </h3>
      <div>
        <h4>
          {translation === 'en' ? dictionary.products.en : dictionary.products.cn}
        </h4>
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
        <h4>
          {translation === 'en' ? dictionary.articles.en : dictionary.articles.cn}
        </h4>
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
  const {translation, articles, products, user} = state
  const {recommendedProducts, recommendedArticles} = user
  return {
    translation,
    articles,
    products,
    recommendedProducts,
    recommendedArticles
  }
}

export default connect(mapStateToProps)(Recommended)
