import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import CodeEditor from '../'

const codeEditorData = {a: 1, b: {c: 2, d: [3, 4, 5]}}

storiesOf('Code editor', module)
  .add('Model', () => (
    <CodeEditor
      data={codeEditorData}
      visible={true}
      onSave={action('save')}
    />
  ))
