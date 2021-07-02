import { createSlice } from '@reduxjs/toolkit'

//=======================================================================================
const INITIAL_STATE = {
	cartVisible: false, 
	notification: null,
	
}

const UIslice = createSlice(
	{
		name: 'ui',
		initialState: INITIAL_STATE,
		reducers: 
		{
			toggle(state)
			{
				state.cartVisible = !state.cartVisible;
			},
			showNotification(state,action)
			{
				state.notification = { 
					status: action.payload.status, 
					title: action.payload.title,
					message: action.payload.message, 
			}
			}
		}
	}
);


export const UIactions = UIslice.actions;
export const UIreducer = UIslice.reducer;

export default UIslice;