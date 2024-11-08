import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/redux-store';

const ProductItem = (props) => {

  const dispatch=useDispatch();
  const products=useSelector(state=>state.cart.products)

  const handleAddToCart=(product)=>{
    const obj={
      id:product.id,
      title:product.title,
      price:product.price,
      description:product.description,
      quantity:1
    }
    const existingItem=products.find((item)=>item.id===product.id);
    // let count=0;
    // for(let i in products){
    //   if(product.id===products[i].id){
    //     count++;
    //   }
    // }
        if(!existingItem){
      dispatch(cartActions.addProduct(obj))
    }
    else{
      dispatch(cartActions.increaseQuantity(product.id))
    }
  }

  const productList = props.products.map((product) => (
    <li key={product.id} className={classes.item}>
      <Card>
        <header>
          <h3>{product.title}</h3>
          <div className={classes.price}>${product.price.toFixed(2)}</div>
        </header>
        <p>{product.description}</p>
        <div className={classes.actions}>
          <button onClick={()=>{handleAddToCart(product)}}>Add to Cart</button>
        </div>
      </Card>
    </li>
  ));

  return (
    <>
    {productList}
    </>
  );
};

export default ProductItem;
