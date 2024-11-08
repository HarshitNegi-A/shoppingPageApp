import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products=[
   { 
    id:'p1',
    title:'Test',
    price:6,
    description:'This is a first product - amazing!',
  },
   { 
    id:'p2',
    title:'Testify',
    price:10,
    description:'This is a second product - amazing!',
  },
   { 
    id:'p3',
    title:'Testiii',
    price:20,
    description:'This is a third product - amazing!',
  }
]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      <ProductItem products={products} />
        
      </ul>
    </section>
  );
};

export default Products;
