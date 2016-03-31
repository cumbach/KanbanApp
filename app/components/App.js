import React from 'react'
import Notes from './Notes'
import { connect } from 'react-redux'
import * as noteActions from '../dux/notes'

@connect(() => ({}), {
  ...noteActions
})
export default class App extends React.Component {
  render() {
    const {createNote} = this.props
    return (
      <div>
        <button onClick={createNote}>+</button>
        <Notes />
      </div>
    )
  }
}
