import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as CodeMirror from 'codemirror'
import 'codemirror-formatting'
import 'codemirror/mode/javascript/javascript'

class CodeEditorForm extends Component {
  constructor (props) {
    super(props)
    this.getValue = this.getValue.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    const {data} = nextProps
    const nextData = data ? JSON.stringify(data) : ''
    this.editor.getDoc().setValue(nextData)
    this.autoFormat()
  }

  componentDidMount () {
    this.editor = CodeMirror.fromTextArea(document.getElementById('code'), {
      lineNumbers: true,
      matchBrackets: true,
      autoCloseBrackets: true,
      mode: 'application/ld+json',
      lineWrapping: true,
      tabSize: 2
    })
    this.autoFormat()
  }

  autoFormat = () => {
    const totalLines = this.editor.lineCount()
    this.editor.autoFormatRange({line: 0, ch: 0}, {line: totalLines})
  }

  getValue () {
    return this.editor.getValue()
  }

  render () {
    const {data} = this.props

    return (
      <textarea id='code' value={data ? JSON.stringify(data) : ''}></textarea>
    )
  }
}

CodeEditorForm.propTypes = {
  data: PropTypes.object
}

export default CodeEditorForm
