import { configureStore } from '@reduxjs/toolkit'

import { cartReducer } from './slice-cart'
import { UIreducer } from './slice-ui'


//=======================================================================================
//=======================================================================================
const store = configureStore({
	reducer: { ui: UIreducer, cart: cartReducer }
	
});

export default store;
