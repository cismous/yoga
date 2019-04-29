import './assets/styles/base.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppRouter } from './router/router'

const rootEl = document.getElementById('root')

ReactDOM.render(<AppRouter />, rootEl)
