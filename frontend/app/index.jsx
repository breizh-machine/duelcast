import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import DuelCast from './components/DuelCast'
import configureStore from './components/rootStore'

const store = configureStore();
render(
	<Provider store={store}>
		<DuelCast/>
	</Provider>,
	document.getElementById('duelcast')
)

