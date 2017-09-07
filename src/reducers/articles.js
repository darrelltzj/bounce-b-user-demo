import {
} from '../actions/types'
import {
  title,
  shortDescription,
  text
} from '../constants/placeholders'

const object = {
  1: {
    _id: 1,
    title,
    authorId: 1,
    author: 'Author 1',
    date: '07/08/2017',
    img: '0.jpg',
    shortDescription,
    text
  },
  2: {
    _id: 2,
    title,
    authorId: 1,
    author: 'Author 1',
    date: '06/08/2017',
    img: '1.jpg',
    shortDescription,
    text
  },
  3: {
    _id: 3,
    title,
    authorId: 2,
    author: 'Author 2',
    date: '05/08/2017',
    img: '2.jpg',
    shortDescription,
    text
  },
  4: {
    _id: 4,
    title,
    authorId: 2,
    author: 'Author 2',
    date: '04/08/2017',
    img: '3.jpg',
    shortDescription,
    text
  },
  5: {
    _id: 5,
    title,
    authorId: 3,
    author: 'Author 3',
    date: '03/08/2017',
    img: '4.jpg',
    shortDescription,
    text
  },
  6: {
    _id: 6,
    title,
    authorId: 3,
    author: 'Author 3',
    date: '02/08/2017',
    img: '5.jpg',
    shortDescription,
    text
  },
  7: {
    _id: 7,
    title,
    authorId: 3,
    author: 'Author 3',
    date: '01/08/2017',
    img: '6.jpg',
    shortDescription,
    text
  }
}
const array = [1, 2, 3, 4, 5, 6, 7]
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
