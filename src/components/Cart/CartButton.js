import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store/redux-store';

const CartButton = (props) => {

  const dispatch=useDispatch()

  const handleButtonClick=()=>{
    dispatch(cartActions.toggleCartButton())
  }

  return (
    <button onClick={handleButtonClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
