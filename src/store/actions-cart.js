import { UIactions } from './slice-ui';
import { cartActions } from "./slice-cart";

//=======================================================================================
const getCartData = () =>
{
	
	return async (dispatch) => 
	{
		const fetchData = async () =>
		{
			const response = await fetch("https://www.google.com");
		
			if(!response.ok)
			{
				throw new Error("FETCH FAIL");
			}

			const data = await response.json();

			return data;
		};

		try
		{
			const cartData = await fetchData();
			dispatch(cartActions.replaceCart({
				items: cartData.items || [],
				totalQuantity: cartData.totalQuantity
			}));

		}
		catch (error)
		{
			dispatch(UIactions.showNotification({
				status: "error",
				title: "ERROR",
				message: "Failed to Get",
			}))
		}
	}


}

//=======================================================================================
const sendCartData = (cart) =>
{
	return async (dispatch) => 
	{

		dispatch(UIactions.showNotification({
			status: "pending",
			title: "Sending...",
			message: "Sending data",
		}))

		const sendRequest = async () => 
		{

			const response = await fetch(
				'https://www.google.com', 
				{	method: 'PUT', 
					body: JSON.stringify(cart),
				}
			)

			if(!response.ok)
			{
				throw new Error("PUT FAIL");
			}
		}

		try
		{
			await sendRequest();
			dispatch(UIactions.showNotification({
				status: "success",
				title: "Successful",
				message: "Data submitted OK",
			}));
		}
		catch (error)
		{
			dispatch(UIactions.showNotification({
				status: "error",
				title: "ERRRORRZ",
				message: "Failed to Submit",
			}))
		}
	}
}

export { getCartData, sendCartData };