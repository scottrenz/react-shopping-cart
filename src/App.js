import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from './contexts/ProductContext'
import {CartContext} from './contexts/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};
	const removeItem = item => {
   const newCart = []

		for (let i=0;i<cart.length;i++)
{
		// console.log('apps cart',item,i ,cart[i])
if( parseInt( cart[i]['id']) !== parseInt( item))
{
	newCart.push(cart[i])
}
	}
setCart(newCart)
for (let i=0;i<cart.length;i++)
{
		// console.log('new apps cart',item,i ,cart[i])
}
for (let i=0;i<newCart.length;i++)
{
		// console.log('newCart apps cart',item,i ,newCart[i])
}
// const newItem = item.map((_, index) => index !== item.id);

		// setCart([...cart, newItem]);

		// const newTodos = todos.filter((_, index) => index !== todoIndex);

	};

	return (
		<div className="App">
	<ProductContext.Provider value={{ products, addItem, removeItem }}>
	<CartContext.Provider value={{ cart, removeItem }}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/" component={Products} />
			<Route path="/cart" component={ShoppingCart} />
	</CartContext.Provider>
	</ProductContext.Provider>
	</div>
	);
}

export default App;
