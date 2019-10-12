import { Async, Sync } from 'redux-action-boilerplate'

export const async = new Async({
  prefix: '',
  actions: [
    'asyncAdd'
  ]
})

export const sync = new Sync({
  prefix: '',
  actions: [
  ]
})
