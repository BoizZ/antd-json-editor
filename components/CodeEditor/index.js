import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'antd/lib/modal'
import notification from 'antd/lib/notification'
import CodeEditorForm from './CodeEditorForm'

import 'antd/dist/antd.css'
import 'codemirror/lib/codemirror.css'

class CodeEditor extends Component {
  state = {
    visible: false,
    data: {}
  }

  componentWillReceiveProps (nextProps) {
    const { data, visible } = nextProps
    this.setState({ data, visible })
  }

  hide = () => {
    this.setState({
      visible: false,
      data: {}
    })
  }

  onSubmit = () => {
    const {onSave} = this.props

    try {
      const value = this.form.getValue()
      const formatValue = JSON.parse(value)
      onSave(formatValue)
      this.setState({
        visible: false
      })
    } catch (e) {
      notification.warning({
        message: 'Data format error',
        description: 'Please enter a valid JSON data format'
      })
    }
  }

  render () {
    const {visible, data} = this.state
    return (
      <Modal
        title={'Code editor'}
        visible={visible}
        onOk={this.onSubmit}
        onCancel={this.hide}
        okText={'Submit'}
        cancelText={'Cancel'}
      >
        <CodeEditorForm
          ref={(ref) => { this.form = ref }}
          data={data}
        />
      </Modal>
    )
  }
}

CodeEditor.propTypes = {
  data: PropTypes.obj,
  visible: PropTypes.bool,
  onSave: PropTypes.func
}

export default CodeEditor
