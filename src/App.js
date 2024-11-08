import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const toggleCart = useSelector(state => state.cart.toggleCart);
  const cart = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(() => {
      
    if(isInitial){
      isInitial=false;
      return
    }

    dispatch(sendCartData(cart));

    }, [cart,dispatch]);

  

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggleCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;