import {
} from '../actions/types'

import {
  title,
  shortDescription
} from '../constants/placeholders'

const object = {
  1: {
    _id: 1,
    title,
    authorId: 1,
    author: 'Author 1',
    date: '07/08/2017',
    img: 'v1.png',
    url: 'https://www.youtube.com/embed/MM2xkfVvz2E',
    shortDescription
  },
  2: {
    _id: 2,
    title,
    authorId: 1,
    author: 'Author 1',
    date: '06/08/2017',
    img: 'v2.png',
    url: 'https://www.youtube.com/embed/k1rBciQO93E',
    shortDescription
  },
  3: {
    _id: 3,
    title,
    authorId: 2,
    author: 'Author 2',
    date: '05/08/2017',
    img: 'v3.png',
    url: 'https://www.youtube.com/embed/xFY5aK4fXO0',
    shortDescription
  }
}
const array = [1, 2, 3]
const INITIAL_STATE = {
  object,
  array
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}
