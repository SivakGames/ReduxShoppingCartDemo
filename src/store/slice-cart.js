import { createSlice } from '@reduxjs/toolkit'

//=======================================================================================
const INITIAL_STATE = {
	items: [], 
	totalQuantity: 0,
	changed: false,
}

const cartSlice = createSlice(
	{
		name: 'counter',
		initialState: INITIAL_STATE,
		reducers: 
		{

			replaceCart(state,action)
			{
				state.totalPrice = action.payload.totalQuantity;
				state.items = action.payload.items;
			},

			addItem(state, action)
			{
				const newItem = action.payload;
				const existingItem = state.items.find(item => item.id === newItem.id);
				state.totalQuantity++;
				state.changed = true;
				
				if(!existingItem)
				{
					state.items.push( {
						id: newItem.id, 
						price: newItem.price, 
						quantity: 1, 
						totalPrice: newItem.price,
						name: newItem.title,
					} );
				}
				else
				{
					existingItem.quantity += 1;
					existingItem.totalPrice += newItem.price;
				}
			},

			removeItem(state, action)
			{
				const id = action.payload;
				const existingItem = state.items.find(item => item.id === id);
				state.totalQuantity--;
				state.changed = true;

				if(existingItem.quantity === 1)
				{
					state.items = state.items.filter(item => item.id !== id);
				}
				else
				{
					existingItem.quantity--;
					existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
				}
			},

		}
	}
);

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export default cartSlice;