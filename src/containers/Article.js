import React from 'react'
import { connect } from 'react-redux'

const Article = () => {
  return (
    <div>
      Article
    </div>
  )
}

function mapStateToProps (state, props) {
  return {
  }
}

export default connect(mapStateToProps)(Article)
