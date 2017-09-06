import {
} from '../actions/types'
import {shortDescription} from '../constants/placeholders'

const INITIAL_STATE = [
  {
    _id: 1,
    title: 'Lorem ipsum dolor',
    author: 'Author',
    date: '07/08/2017',
    img: '0.jpg',
    shortDescription
  },
  {
    _id: 2,
    title: 'Lorem ipsum dolor',
    author: 'Author',
    date: '06/08/2017',
    img: '1.jpg',
    shortDescription
  },
  {
    _id: 3,
    title: 'Lorem ipsum dolor',
    author: 'Author',
    date: '05/08/2017',
    img: '2.jpg',
    shortDescription
  },
  {
    _id: 4,
    title: 'Lorem ipsum dolor',
    author: 'Author',
    date: '04/08/2017',
    img: '3.jpg',
    shortDescription
  },
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

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}
