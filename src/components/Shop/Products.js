import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY = [
	{ id: 'p1', price: 6, title: "Book", description: "Blah" },
	{ id: 'p2', price: 7, title: "Book 2", description: "Blah 2" }
]

const Products = (props) =>
{
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY.map(p => (
					<ProductItem 
						key={p.id} 
						{...p}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
