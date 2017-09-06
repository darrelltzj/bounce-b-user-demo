import React, { Component } from 'react'
import { connect } from 'react-redux'
import { errorAcknowledged, noticeAcknowledged } from '../../actions/flash'

class Flash extends Component {
  constructor (props) {
    super(props)
    this.state = {
      errorCount: 0,
      noticeCount: 0
    }
    this.renderErrors = this.renderErrors.bind(this)
    this.handleErrorAcknowledged = this.handleErrorAcknowledged.bind(this)
  }
  componentDidUpdate () {
    if (this.props.errors.length && this.props.errors.length > this.state.errorCount) {
      setTimeout(() => this.handleErrorAcknowledged(0), 10000)
      this.setState({
        errorCount: this.props.errors.length
      })
    }
    if (this.props.notices.length && this.props.notices.length > this.state.noticeCount) {
      setTimeout(() => this.handleNoticeAcknowledged(0), 10000)
      this.setState({
        noticeCount: this.props.notices.length
      })
    }
  }
  handleErrorAcknowledged (index) {
    this.props.errorAcknowledged(index)
    this.setState({
      errorCount: this.state.errorCount - 1
    })
  }
  handleNoticeAcknowledged (index) {
    this.props.noticeAcknowledged(index)
    this.setState({
      noticeCount: this.state.noticeCount - 1
    })
  }
  renderErrors () {
    if (this.props.errors.length) {
      return this.props.errors.map((error, index) => {
        return (
          <div
            key={index}
            style={{cursor: 'pointer'}}
            onClick={() => this.handleErrorAcknowledged(index)}
            >
            <span>
              <strong>Error! </strong>
              {error}
            </span>
          </div>
        )
      })
    }
  }
  renderNotices () {
    if (this.props.notices.length) {
      return this.props.notices.map((notice, index) => {
        return (
          <div
            style={{cursor: 'pointer'}}
            onClick={() => this.handleNoticeAcknowledged(index)}
            >
            <span>
              <strong>Notice! </strong>
              {notice}
            </span>
          </div>
        )
      })
    }
  }
  render () {
    return (
      <div>
        {this.renderErrors()}
        {this.renderNotices()}
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    errors: state.flash.errors,
    notices: state.flash.notices
  }
}
export default connect(mapStateToProps, {
  errorAcknowledged,
  noticeAcknowledged
})(Flash)
