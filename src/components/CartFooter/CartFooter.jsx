import formatPrice from '../../utils/priceFormatter';
import './style.scss';

const CartFooter = ({ total }) => {
	const { count, price } = total;
	return (
		<footer className='cart-footer'>
			<div className='cart-footer__count'>{count} шт.</div>
			<div className='cart-footer__price'>{formatPrice(price)} руб.</div>
		</footer>
	);
};

export default CartFooter;
