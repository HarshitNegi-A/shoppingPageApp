import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items=useSelector(state=>state.cart.products)
  console.log(items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* {items.map((item)=>(
          <CartItem
          id={item.id}
          title={item.title}
          quantity={item.quantity}
          total={Number(item.price*item.quantity)}
          price={item.price}
        />
        ))} */}
        <CartItem items={items} />
      </ul>
    </Card>
  );
};

export default Cart;
