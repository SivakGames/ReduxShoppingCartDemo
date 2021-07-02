//====================================================================
import { useSelector } from 'react-redux';
//====================================================================
import { useDispatch } from 'react-redux';
import { UIactions } from '../../store/slice-ui';
//====================================================================
import classes from './CartButton.module.css';

const CartButton = (props) =>
{
	const dispatch = useDispatch();
	const qty = useSelector(state => state.cart.totalQuantity);

//------------------------------------------------------------

	function toggle()
	{
		dispatch(UIactions.toggle());
		return;
	}

//------------------------------------------------------------

	return (
		<button className={classes.button} onClick={toggle}>
			<span>My Cart</span>
			<span className={classes.badge}>{qty}</span>
		</button>
	);
};

export default CartButton;
