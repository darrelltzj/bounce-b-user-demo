import {
} from '../actions/types'

const recommendedProducts = [6, 8]
const recommendedArticles = [1, 2, 3, 5, 6, 7]
const pinnedArticles = [
  {
    title: {
      en: 'Food and Nutrition',
      cn: '食物和营养'
    },
    articleIds: [1, 2, 3]
  },
  {
    title: {
      en: 'Body and Mind',
      cn: '身心'
    },
    articleIds: [5, 6, 7]
  },
  {
    title: {
      en: 'Supplements',
      cn: '补品'
    },
    articleIds: [4, 5, 6]
  },
  {
    title: {
      en: 'Herbal',
      cn: '草本'
    },
    articleIds: [1, 2, 7]
  },
  {
    title: {
      en: 'Author 3',
      cn: 'Author 3'
    },
    articleIds: [5, 6, 7]
  },
  {
    title: {
      en: 'Videos',
      cn: '视频'
    },
    videoIds: [1, 2, 3]
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
