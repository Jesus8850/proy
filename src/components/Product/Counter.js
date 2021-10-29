import {useState} from 'react'
import CartWidget from '../NavBar/CartWidget'

const Counter = ({stock, initial = 0, onAdd}) => {
	const [count, setCount] = useState(initial)
	let valida = true
	return (
		<div>
			<div>
				<button disabled={stock === 0 || count <= 0} onClick={() => setCount(count - 1)}>-</button>
				<span>{stock === 0 ? 'Sin stock' : count}</span>
				<button disabled={stock === 0 || count >= stock } onClick={() => setCount(count + 1)}>+</button>
			</div>
			<button disabled={stock === 0 || count <= 0 || count > stock} onClick={() => onAdd(count)}>Agregar al carrito</button>
			<CartWidget show={valida}></CartWidget>
			<span className="total-stock">Stock: {stock - count}</span>
		</div>
	)
}

export default Counter