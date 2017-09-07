import {
} from '../actions/types'
import {
  title,
  shortDescription} from '../constants/placeholders'

const recommendedProducts = [
  {
    _id: 5,
    title,
    authorId: 3,
    author: 'Author 3',
    date: '03/08/2017',
    img: '4.jpg',
    shortDescription
  },
  {
    _id: 6,
    title,
    authorId: 3,
    author: 'Author 3',
    date: '02/08/2017',
    img: '5.jpg',
    shortDescription
  }
]
const recommendedArticles = [
  {
    _id: 5,
    title,
    authorId: 3,
    author: 'Author 3',
    date: '03/08/2017',
    img: '4.jpg',
    shortDescription
  },
  {
    _id: 6,
    title,
    authorId: 3,
    author: 'Author 3',
    date: '02/08/2017',
    img: '5.jpg',
    shortDescription
  }
]
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
