const ButtonDelete = ({ deleteProduct, id }) => {
	return (
		<button
			type='button'
			onClick={() => {
				deleteProduct(id);
			}}
		>
			<img src='./img/icons/x.svg' alt='x' />
		</button>
	);
};

export default ButtonDelete;
