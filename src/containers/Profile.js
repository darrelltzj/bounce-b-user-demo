import React from 'react'
import { connect } from 'react-redux'

const Profile = () => {
  return (
    <div>
      Profile
    </div>
  )
}

function mapStateToProps (state, props) {
  return {
  }
}

export default connect(mapStateToProps)(Profile)
