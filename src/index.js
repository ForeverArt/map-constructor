import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './containers/App'
import EditorContainer from './containers/EditorContainer'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  applyMiddleware(...middleware)
)

render (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/editor' component={EditorContainer} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
