import React from 'react'
import { storiesOf } from '@storybook/react'
import UnmountScheduler from '../src/components/UnmountScheduler'
import {
  withKnobs,
  boolean,
  number,
  text,
  select,
} from '@storybook/addon-knobs'
import { withArtboard } from '@helpscout/artboard'

const stories = storiesOf('UnmountScheduler', module)

stories.addDecorator(
  withArtboard({
    id: 'hsds-UnmountScheduler',
    width: 500,
    height: 300,
    withCenterGuides: false,
  })
)
stories.addDecorator(withKnobs)

stories.add('Default', () => <UnmountScheduler />)
