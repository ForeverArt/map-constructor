import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditorContainer extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        editor
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(EditorContainer)
