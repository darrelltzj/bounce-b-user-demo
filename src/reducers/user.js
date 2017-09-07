import {
} from '../actions/types'

const recommendedProducts = [5, 6]
const recommendedArticles = [1, 2, 3, 5, 6, 7]
const pinnedArticles = [
  {
    title: 'Food and Nutrition',
    articles: [1, 2, 3]
  },
  {
    title: 'Body and Mind',
    articles: [5, 6, 7]
  },
  {
    title: 'Supplements',
    articles: [4, 5, 6]
  },
  {
    title: 'Herbal',
    articles: [1, 2, 7]
  },
  {
    title: 'Author 3',
    articles: [5, 6, 7]
  },
  {
    title: 'Others',
    articles: [1, 2, 3]
  }
]

const INITIAL_STATE = {
  recommendedProducts,
  recommendedArticles,
  pinnedArticles
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}
