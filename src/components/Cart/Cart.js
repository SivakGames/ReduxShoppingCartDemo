//====================================================================
import { useSelector } from 'react-redux';
//====================================================================
import Card from '../UI/Card';
import CartItem from './CartItem';
//====================================================================
import classes from './Cart.module.css';

const Cart = (props) =>
{
	
	const items = useSelector(state => state.cart.items);

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{items.map(i => (
					<CartItem 
						key={i.id} 
						item={ {title: i.name, price: i.price, total: i.totalPrice, quantity: i.quantity, id: i.id} }
					/>
				))}
			</ul>
		</Card>
	);
};

export default Cart;
