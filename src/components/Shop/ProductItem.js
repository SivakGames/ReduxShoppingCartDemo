import Card from '../UI/Card';
//=======================================================================================
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/slice-cart';
//=======================================================================================
import classes from './ProductItem.module.css';
//=======================================================================================
const ProductItem = (props) =>
{
	const dispatch = useDispatch();
	const { title, price, description, id } = props;
	
//-----------------------------------

	function doAdd()
	{
		dispatch(cartActions.addItem(
			{id, title, price}
		));
		return;
	}


//-----------------------------------

	return (
		<li className={classes.item}>
			<Card>
				<header>
					<h3>{title}</h3>
					<div className={classes.price}>${price.toFixed(2)}</div>
				</header>
				<p>{description}</p>
				<div className={classes.actions}>
					<button onClick={doAdd}>Add to Cart</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
