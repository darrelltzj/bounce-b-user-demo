import React from 'react'
import { connect } from 'react-redux'

const Product = () => {
  return (
    <div>
      Product
    </div>
  )
}

function mapStateToProps (state, props) {
  return {
  }
}

export default connect(mapStateToProps)(Product)
