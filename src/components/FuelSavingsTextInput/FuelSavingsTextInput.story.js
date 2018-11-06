import React from 'react'
import { storiesOf } from '@storybook/react'
import FuelSavingsTextInput from './FuelSavingsTextInput'

storiesOf('FuelSavingsTextInput', module)
  .add('default', () => (
    <FuelSavingsTextInput
      name=''
      value=''
      placeholder=''
      onChange={() => { console.log('changed') }}
    />
  ))
