import {
} from '../actions/types'
import {shortDescription} from '../constants/placeholders'

const pinnedArticles = [
  {
    _id: 5,
    title: 'Lorem ipsum dolor',
    author: 'Author',
    date: '03/08/2017',
    img: '4.jpg',
    shortDescription
  },
  {
    _id: 6,
    title: 'Lorem ipsum dolor',
    author: 'Author',
    date: '02/08/2017',
    img: '5.jpg',
    shortDescription
  },
  {
    _id: 7,
    title: 'Lorem ipsum dolor',
    author: 'Author',
    date: '01/08/2017',
    img: '6.jpg',
    shortDescription
  }
]

const INITIAL_STATE = {
  pinnedArticles
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}
