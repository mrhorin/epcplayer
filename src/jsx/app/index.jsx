import React from 'react'
import ReactDOM from 'react-dom'

import css from 'scss/style'

/* アプリケーションのメインウィンドウ */
export default class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = Storage.defaultState
    // Shiftの押下状態
    this.isPressShift = false
  }

  render() {
    return (
      <div id="app">
        <h1>Hello, epcplayer</h1>
      </div>
    )
  }

}

ReactDOM.render(
  <Index/>,
  document.getElementById('container')
)