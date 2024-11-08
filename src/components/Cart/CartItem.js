import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/redux-store';

const CartItem = (props) => {
  // const { id,title, quantity, total, price } = props;
  const dispatch=useDispatch()

  const itemList = props.items.map((item) => (
    <li key={item.id} className={classes.item}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${Number(item.quantity*item.price).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>handleDecreaseButton(item)}>-</button>
          <button onClick={()=>handleIncreaseButton(item.id)}>+</button>
        </div>
      </div>
    </li>
  ));

  const handleIncreaseButton=(id)=>{
    dispatch(cartActions.increaseQuantity(id))
  }

  const handleDecreaseButton=(item)=>{
    if(item.quantity>1){
      dispatch(cartActions.decreaseQuantity(item.id))
    }
    else{
      dispatch(cartActions.removeProduct(item.id))
    }
    
  }

  return (
    <>
    {itemList}
    </>
  );
};

export default CartItem;
