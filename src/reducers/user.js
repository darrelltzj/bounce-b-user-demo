import {
} from '../actions/types'

const pinnedArticles = []
for (let i = 0; i < 6; i++) {
  pinnedArticles.push({
    _id: i,
    title: 'Lorem ipsum dolor',
    author: `Author ${i}`,
    date: `${28 - i}/08/2017`,
    tags: []
  })
}

const INITIAL_STATE = {
  pinnedArticles
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}
