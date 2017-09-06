import React from 'react'
import { connect } from 'react-redux'

const Company = () => {
  return (
    <div>
      Company
    </div>
  )
}

function mapStateToProps (state, props) {
  return {
  }
}

export default connect(mapStateToProps)(Company)
