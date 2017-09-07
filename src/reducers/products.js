import {
} from '../actions/types'

const tags = ['health', 'mushroom', 'ginseng', 'fitness', 'life']
const object = {}
const array = []
for (var i = 1; i < 15; i++) {
  object[i] = {
    _id: i,
    name: `Product ${i}`,
    price: Math.round(Math.random() * 100).toFixed(0),
    tag: tags[Math.round(Math.random() * tags.length)],
    companyId: Math.round(Math.random() * 15),
    img: `${Math.floor(Math.random() * 6)}.jpg`
  }
  array.push(i)
}

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
