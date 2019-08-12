import React, {useContext} from 'react';
// useContext hook as well as our ProductContext
import {ProductContext} from './contexts/ProductContext'

// Components
import Navigation from './components/Navigation';

// Components
import Product from './Product';

const Products = () => {
	const { products, addItem } = useContext(ProductContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
