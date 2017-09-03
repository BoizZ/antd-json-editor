import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from 'antd/lib/button'
import CodeEditor from '../CodeEditor'

const codeEditorData = {a: 1, b: {c: 2, d: [3, 4, 5]}}

storiesOf('Button', module)
  .add('Code editor', () => (
    <div>
      <Button onClick={() => { this.codeEditor.show(codeEditorData) }}>Code editor show</Button>
      <CodeEditor
        ref={(ref) => { this.codeEditor = ref }}
        onSave={action('save')}
      />
    </div>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
