import {
} from '../actions/types'

const INITIAL_STATE = []
for (let i = 0; i < 6; i++) {
  INITIAL_STATE.push({
    _id: i,
    title: 'Lorem ipsum dolor',
    author: `Author ${i}`,
    date: `07/08/2017`,
    tags: []
  })
}
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}
