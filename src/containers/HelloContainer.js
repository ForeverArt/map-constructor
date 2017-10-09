import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class HelloContainer extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Link to='/editor'>Hello</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(HelloContainer)
