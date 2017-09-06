import React from 'react'
import { connect } from 'react-redux'

const Info = () => {
  return (
    <div>
      Info
    </div>
  )
}

function mapStateToProps (state, props) {
  return {
  }
}

export default connect(mapStateToProps)(Info)
