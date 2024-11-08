import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store/redux-store';

const CartButton = (props) => {

  const dispatch=useDispatch()
  const products=useSelector(state=>state.cart.products)
  const totalQuantity=products.reduce((total,product)=>total+product.quantity,0)

  const handleButtonClick=()=>{
    dispatch(cartActions.toggleCartButton())
  }

  return (
    <button onClick={handleButtonClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
